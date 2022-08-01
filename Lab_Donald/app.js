//*       -----------------------ORDRE OBLIGATOIRE--------------------
//? ///////////////// STRUCTURE et MISE-en-PLACE de BASE (P1) //////////////////////////////


//todo 1) Initialising Project BASE
//todo ______________________________
require('dotenv-flow').config();
const { MESSAGE, NODE_ENV, PORT, DB_CONNECTION } = process.env;
console.log('Connect TO', NODE_ENV, ':', MESSAGE);

const { application } = require('Express');



// ---Library NoSQL (mongoose)
// *---------------
const mongoose = require('mongoose')



//todo 2) Mise en place SERVER EXPRESS
//todo _________________________________

//! /!\ Library gestion error async await Middleware  
// *----------------------
require('express-async-errors')

// *----------------------
const express = require('Express')
const router = require('./Root')
const server = express()


//! /!\ First MIDDLEWARE
server.use(express.json())



//todo 3) ROOT Definitive
//todo ________________________________

// --Root Connection middleware DB (mongodb)
//* ----------------------
server.use(async (req, res, next) => {
    await mongoose.connect(DB_CONNECTION)
    console.log('--* Yes To Connect *--')
    next()
})



// --Root request
//* ---------------
server.use('/api', router)


//todo 4) LECTURE du SERVER
//todo __________________________________
server.listen(PORT, () => {
    console.log(`SERVER UP On PORT : ${PORT} ${NODE_ENV}`);
})