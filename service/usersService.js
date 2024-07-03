const dbConnection=require('../config/connection');

const createUserService=(userData,callback)=>{
    const query=`INSERT INTO users (FirstName,LastName,DOB,UserTypeId) VALUES (?,?,?,?)`;
    dbConnection.query(query,
        [
            userData.FirstName,
            userData.LastName,
            userData.DOB,
            userData.UserTypeId
        ],
        (error,result)=>{
            callback(error,result)
        });
}

module.exports={
    createUserService
}