const { Router } = require('express');
const router = Router();

const {getAll, create} = require('../data/cars');

/**
 * MVP:
 *  Write endpoints to support CREATE and READ operations on the cars resource.
 */

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
  });


module.exports.router = router;