/*
@author: Emad Bin Abid
@date: 26-10-2018
*/

//Dependencies
    //npm
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');

    //custom
const server = require('./server');
const connection = require('./connection.mongoose');

const app = express();

//Creating middlewares
app.use(express.json());    //To pares json objects sent by the client
app.use(cors());            //To resolve cross-origin border issues

//Creating routes


//Validating user


//Running the server
server.run(app, 3000);

//Connection to database
connection.connect(mongoose, "127.0.0.1", 27017);