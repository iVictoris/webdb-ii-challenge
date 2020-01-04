const db = require('../db');

const getAll = () => {
  return db('cars');
}

const getOne = (id) => {
  return db('cars').where({id});
}

const create = (car) => {
  return db('cars').insert({...car}).then(ids => getOne(ids[0]));
} 

module.exports = {
  getAll,
  getOne,
  create
}