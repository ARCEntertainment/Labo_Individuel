//?  //////////////////////// ROUTER PARENT structure //////////////////////////////////////


//todo Implentation Route
//todo _______________________________

const burgerRouter = require('./burger-router')
const comandRouter = require('./command-router')
const clientRouter = require('./client-router')




//todo Initialising EXPRESS
//todo _______________________________

const router = require('express').Router()




//todo Importation ROOT
//todo _________________________________

router.use('/burger', burgerRouter)
router.use('/command', comandRouter)
router.use('/client', clientRouter )




//todo EXPORTED ROOT
//todo ____________________________________

module.exports = router









