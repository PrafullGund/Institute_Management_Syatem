const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

router.post('/', usersController.createUsersController);
router.get('/', usersController.getAllUserController);
router.get('/:id', usersController.getUserByIdController);
router.put('/updateUser/:id', usersController.updateUserController);
router.delete('/deleteUser/:id', usersController.deleteUserController);

module.exports = router;