const { Router } = require('express');
const CategoryController = require('./category.controller.js');
const { auth } = require('../auth/middlewares');

const router = Router();

router.get('/', auth, CategoryController.get);

module.exports = {
  path: '/api/categories',
  router,
};
