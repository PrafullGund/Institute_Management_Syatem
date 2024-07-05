CREATE DATABASE institute_management_system;
USE institute_management_system;

CREATE TABLE UserType (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserTypeName VARCHAR(50) NOT NULL,
    UserTypeDescription VARCHAR(255) NOT NULL
);

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName TEXT,
    LastName TEXT,
    DOB TIMESTAMP,
    UserTypeId INT,
    FOREIGN KEY (UserTypeId) REFERENCES UserType(Id)
);