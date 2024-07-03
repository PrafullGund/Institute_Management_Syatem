const userTypeService = require('../service/userTypeService');
const { userTypeJoi } = require('../validations/userTypeValidations');

const createUserTypeController = (req, res) => {
    const { error } = userTypeJoi.validate(req.body);

    if (error) {
        return res.status(400).send({
            message: error.details[0].message,
        });
    }

    userTypeService.createUserTypeService(req.body, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            res.status(200).json({ success: true, message: "User Added" });
        }
    });
}

const getAllUserTypeController = (req, res) => {
    userTypeService.getAllUserTypeService((error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            res.status(201).json({ success: true, data: result })
        }
    });
}

const getUserTypeByIdController = (req, res) => {
    const userTypeId = req.params.id;
    userTypeService.getUserTypeByIdService(userTypeId, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.length === 0) {
                res.status(404).json({ success: false, message: "UserType Not Found" })
            }
            else {
                res.status(200).json({ success: true, data: result[0] })
            }
        }
    });
}

const updateUserTypeController = (req, res) => {
    const userTypeId = req.params.id;
    const userTypeData = req.body;
    userTypeService.updateUserTypeService(userTypeId, userTypeData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ success: true, message: 'User Type Update' })
            }
            else {
                res.status(500).json({ success: false, message: 'User Type Not Found' })
            }
        }
    });
}

const deleteUserTypeController = (req, res) => {
    const userTypeId = req.params.id;
    userTypeService.deleteUserTypeService(userTypeId, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ success: true, message: 'User Type Delete' });
            }
            else {
                res.status(500).json({ success: false, message: 'User Type Not Found' });
            }
        }
    })
}

module.exports = {
    createUserTypeController,
    getAllUserTypeController,
    getUserTypeByIdController,
    updateUserTypeController,
    deleteUserTypeController
};
