const { Router } = require('express');
const ProfileController = require('./profile.controller.js');
const ProfileRequest = require('./requests');
const { auth } = require('../auth/middlewares');

const router = Router();

router.route('/').patch(auth, ProfileRequest.update, ProfileController.update);

module.exports = {
  path: '/api/profile',
  router,
};
