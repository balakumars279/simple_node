const express = require('express');
const router = express.Router();
const { User } = require('./../model')

router.get('/', function (req,res){

    res.status(201).send('Welcome to test page')
})


router.post('/', function(req,res){

    console.log('hi');

    var a = {};
    a.test = "hello";
    a,test1 = "hello1";

    res.json(a);
})

module.exports = router;

