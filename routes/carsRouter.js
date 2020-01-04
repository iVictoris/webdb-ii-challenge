const { Router } = require('express');
const router = Router();

const {getAll, create} = require('../data/cars');

/**
 * MVP:
 *  Write endpoints to support CREATE and READ operations on the cars resource.
 */

const validateCar = (req, res, next) => {
  const {body} = req;
  const {vin, make, model, mileage} = body;

  if (!body) {
    res
      .status(400)
      .json({
      message: "No data sent at all. Please send required data."
    });
  }

  if (!vin || !make || !model || mileage) {
    res
      .status(400)
      .json({
      message: "VIN, Make, Model, and Mileage are all required. Please supply this information."
    });
  }

  next();
}

router.post('/', validateCar);

router
  .route('/')
  .get(async (req, res) => {
    /* GET  */
    try {
      const cars = await getAll();
      res
        .status(200)
        .json(cars);  
    } catch (error) {
      res
        .status(500)
        .json({
        message: "Server issue getting all of the cars"
      });
    }
  })
  .post(async (req, res) => {
    /* POST  */
    const {make, model, vin, mileage} = req.body;
    const carFromBody = {make, model, vin, mileage}

    try {
      const car = await create(carFromBody);
      res
        .status(201)
        .json(car);
    } catch (error) {
      res
        .status(500)
        .json({
        message: "Server issue in creating car. Try again."
      });
    }
  });


module.exports.router = router;