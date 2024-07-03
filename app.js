const path = require('path');
const express = require('express');
const dbConnection = require('./config/connection');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userTypeRoute = require('./route/userTypeRoute');
const usersRoute=require('./route/usersRoute');

const port = process.env.PORT || 3000;

app.use('/userType', userTypeRoute);
app.use('/users',usersRoute);


app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});
