const dbConnection = require('../config/connection');

const createUserTypeService = (userType, callback) => {
    const query = `INSERT INTO userType (UserTypeName, UserTypeDescription) VALUES (?,?)`;
    dbConnection.query(query,
        [
            userType.UserTypeName,
            userType.UserTypeDescription
        ],
        (error, result) => {
            callback(error, result);
        });
}

const getAllUserTypeService = (callback) => {
    const query = `SELECT * FROM userType`;
    dbConnection.query(query, (error, result) => {
        callback(error, result)
    });
}

const getUserTypeByIdService = (userTypeId, callback) => {
    const query = 'SELECT * FROM UserType WHERE Id = ?';
    dbConnection.query(query, [userTypeId], (error, result) => {
        callback(error, result);
    });
};

const updateUserTypeService = (userTypeId, userTypeData, callback) => {
    const query = `UPDATE userType SET UserTypeName=?, UserTypeDescription=? WHERE id=?`;

    dbConnection.query(query,
        [
            userTypeData.UserTypeName,
            userTypeData.UserTypeDescription,
            userTypeId
        ],
        (error, result) => {
            callback(error, result)
        });
}

const deleteUserTypeService = (userTypeId, callback) => {
    const query = `DELETE FROM userType WHERE id=?`;

    dbConnection.query(query,
        [userTypeId], (error, result) => {
            callback(error, result)
        });
}

module.exports = {
    createUserTypeService,
    getAllUserTypeService,
    getUserTypeByIdService,
    updateUserTypeService,
    deleteUserTypeService
};
