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

//Connect to Mongoose
mongoose.connect('mongodb://localhost/evaluationform');
var db = mongoose.connection;

EvalForm = require('./model/Evaluation_Form');

//Creating middlewares
app.use(express.json());    //To pares json objects sent by the client
app.use(cors());            //To resolve cross-origin border issues

//Creating routes

app.post('/evaluationform/submit',function(req,res){
    console.log("In app.js");
    var result = req.body;
    EvalForm.addResult(result,function(err,result){
        if(err){
            throw err;
        }
        res.json(result);
    })
});


app.get('/evaluationform',function(req,res){
    EvalForm.getResults(function(err,results){
        if(err){
            throw err;
        }
        res.json(results);
    })
});

app.delete('/evaluationform/:_id',function(req,res){
    var id = req.params._id;
    EvalForm.deleteResult(id,function(err,result){
        if(err){
            throw err;
        }
        res.json(result);
    });
});

//Validating user


//Running the server
server.run(app, 3000);
console.log('Running on port 3000')
//Connection to database
connection.connect(mongoose, "127.0.0.1", 27017);