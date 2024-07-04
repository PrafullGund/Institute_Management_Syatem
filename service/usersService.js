const dbConnection = require('../config/connection');

const createUserService = (userData, callback) => {
    const query = `INSERT INTO users (FirstName,LastName,DOB,UserTypeId) VALUES (?,?,?,?)`;
    dbConnection.query(query,
        [
            userData.FirstName,
            userData.LastName,
            userData.DOB,
            userData.UserTypeId
        ],
        (error, result) => {
            callback(error, result)
        });
}

const getAllUserService = (callback) => {
    const query = `SELECT * FROM users`;
    dbConnection.query(query, (error, result) => {
        callback(error, result)
    })
}

const getUserByIdService = (userId, callback) => {
    const query = `SELECT * FROM users WHERE Id=?`;
    dbConnection.query(query, [userId], (error, result) => {
        callback(error, result)
    })
}

const updateUserService = (userId, userData, callback) => {
    const query = `UPDATE users SET FirstName=?,LastName=?,DOB=?,UserTypeId=? WHERE id=?`;
    dbConnection.query(query,
        [
            userData.FirstName,
            userData.LastName,
            userData.DOB,
            userData.UserTypeId,
            userId
        ],
        (error, result) => {
            callback(error, result);
        }
    )
}

const deleteUserService = (userId, callback) => {
    const query = `DELETE FROM users WHERE id=?`;
    dbConnection.query(query, [userId], (error, result) => {
        callback(error, result);
    })
}

module.exports = {
    createUserService,
    getAllUserService,
    getUserByIdService,
    updateUserService,
    deleteUserService
}