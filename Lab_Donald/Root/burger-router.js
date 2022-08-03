//? ///////////////////////// MISE En PLACE ROOTING Burger (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________

const burgerRouter = require('express').Router()
const burgerController = require('../Controllers/burger-controller')
const bodyValidator = require('../Middleware/body-validator')
const idValidator = require('../Middleware/id-validator')
const burgerValidator = require('../Validators/burger_for-body-validator')





//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

burgerRouter.get('/', burgerController.getALL)

burgerRouter.get('/:id', idValidator(), burgerController.getById)

burgerRouter.post('/', bodyValidator(burgerValidator), burgerController.creat)

burgerRouter.put('/:id', idValidator(), bodyValidator(burgerValidator), burgerController.update)

burgerRouter.delete('/:id', idValidator(), burgerController.delete)




//todo Exported ROOT
//todo ________________________________

module.exports = burgerRouter




