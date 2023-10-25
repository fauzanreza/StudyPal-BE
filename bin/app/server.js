// const express = require('express')
import express from "express";
import "dotenv/config"
import categoryHandler from "../modules/category/handler/api_handler.js";
import project from "../../package.json" assert { type: "json" };
const AppServer = express()
const port = process.env.PORT;

AppServer.use(express.json());
AppServer.get('/', function (req, res) {
  res.send(`Welcome to ${project.name} Server`)
})

// Category API
AppServer.get('/api/v1/category', categoryHandler.getAllCategory)
AppServer.post('/api/v1/category', categoryHandler.insertCategory)
AppServer.patch('/api/v1/category/:id', categoryHandler.updateCategory)
AppServer.delete('/api/v1/category/:id', categoryHandler.deleteCategory)

export {
    AppServer
}