const { Router } = require('express');
const CategoryController = require('./category.controller.js');
const CategoryRequest = require('./requests');
const { auth } = require('../auth/middlewares');

const router = Router();

router
  .route('/')
  .get(auth, CategoryController.get)
  .post(auth, CategoryRequest.create, CategoryController.create);

router
  .route('/:id')
  .get(auth, CategoryController.find)
  .patch(auth, CategoryRequest.update, CategoryController.update)
  .delete(auth, CategoryController.delete);

module.exports = {
  path: '/api/categories',
  router,
};
