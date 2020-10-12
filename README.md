# Quiz Project-backend

## Description

Vehicle Project backend using Nodejs as the framework layer

## Pre requisite

1. Nodejs version = 12.18.3 is installed
2. NPM package manager is installed
3. MySql database
4. Database Credentials :-

  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "vehicleDb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

## Installation

bash
$ npm install

## Running the app

# development
$ node index.js or nodemon index.js

Verify that you can hit the url http://localhost:3000/api/v1
