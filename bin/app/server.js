// const express = require('express')
import express from "express";
import "dotenv/config"
import * as db from '../helpers/databases/connection.js'
import categoryHandler from "../modules/category/handler/api_handler.js";
import project from "../../package.json" assert { type: "json" };
const AppServer = express()
const port = process.env.PORT;

AppServer.use(express.json());
AppServer.get('/', function (req, res) {
  res.send(`Welcome to ${project.name} Server`)
})

// db.getClient(err => {
//     if(err){
//         console.log(err.message)
//     }
// })

// Category API
AppServer.get('/api/newcategory', categoryHandler.getnewAllCategory)
AppServer.get('/api/category', categoryHandler.getAllCategory)
AppServer.post('/api/category', categoryHandler.insertCategory)
AppServer.patch('/api/category/:id', categoryHandler.updateCategory)
AppServer.delete('/api/category/:id', categoryHandler.deleteCategory)

export {
    AppServer
}