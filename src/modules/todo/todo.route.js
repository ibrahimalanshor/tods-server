const { Router } = require('express');
const TodoController = require('./todo.controller.js');
const TodoRequest = require('./requests');
const { auth } = require('../auth/middlewares');

const router = Router();

router
  .route('/')
  .get(auth, TodoController.get)
  .post(auth, TodoRequest.create, TodoController.create);

router
  .route('/:id')
  .get(auth, TodoController.find)
  .patch(auth, TodoRequest.update, TodoController.update)
  .delete(auth, TodoController.delete);

router
  .route('/:id/status')
  .patch(auth, TodoRequest.updateStatus, TodoController.updateStatus);

module.exports = {
  path: '/api/todos',
  router,
};
