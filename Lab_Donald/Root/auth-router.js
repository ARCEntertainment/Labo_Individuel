//? ///////////////////////// MISE En PLACE ROOTING Authentication (Router) /////////////////////////


// TOOLS Imported
// _______________________________
const authController = require('../Controllers/auth-controller');
const  bodyValidator  = require('../Middleware/body-validator')
const { loginValidator, registerValidator } = require('../Validators/auth_for-body-validator');



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

authRouter.post('/login', bodyValidator(loginValidator), authController.login);


//* ----------REGISTRATION-------------

authRouter.post('/register', bodyValidator(registerValidator), authController.register);



//todo Exported ROOT
//todo ________________________________
module.exports = authRouter
