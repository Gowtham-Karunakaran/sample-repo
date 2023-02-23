const express= require('express')
var app = express()
const homeController=require('../controllers/homeController')

app.post('/homePage/:id', homeController.details)
module.exports=app;