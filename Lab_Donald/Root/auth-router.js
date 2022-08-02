//? ///////////////////////// MISE En PLACE ROOTING Authentication (Router) /////////////////////////


// TOOLS Imported
// _______________________________
const authController = require('../Controllers/auth-controller')



//todo Initialising EXPRESS
//todo _______________________________
const authRouter = require('express').Router()



//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ---------AUTHENTIFICATION----------

authRouter.post('/login', authController.login);


//* ----------REGISTRATION-------------

authRouter.post('/register', authController.register);



//todo Exported ROOT
//todo ________________________________
module.exports = authRouter
