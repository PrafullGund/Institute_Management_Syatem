const express = require('express');
const router = express.Router();
const userTypeController = require('../controller/userTypeController');

router.post('/', userTypeController.createUserTypeController);
router.get('/', userTypeController.getAllUserTypeController);
router.get('/:id', userTypeController.getUserTypeByIdController);
router.put('/updateUserType/:id', userTypeController.updateUserTypeController);
router.delete('/deleteUserType/:id', userTypeController.deleteUserTypeController);

module.exports = router;
