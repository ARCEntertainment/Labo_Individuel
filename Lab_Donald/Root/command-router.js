//? ///////////////////////// MISE En PLACE ROOTING Command (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________

const comandRouter = require('express').Router()
const comandController = require('../Controllers/command-controller')
const authentication = require('../Middleware/auth-jwt')
const bodyValidator = require('../Middleware/body-validator')
const {insertCommandValidator, updateCommandValidator} = require('../Validators/command_for-body-validator')
const idValidator = require('../Middleware/id-validator')




//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

comandRouter.get('/', authentication('Moderator', 'Admin'), comandController.getAll)

comandRouter.get('/:id', authentication(), idValidator(), comandController.getById)

comandRouter.post('/', authentication('Moderator', 'Admin'), bodyValidator(insertCommandValidator), comandController.creat) //

comandRouter.put('/:id', authentication('Moderator', 'Admin'), idValidator(),bodyValidator(updateCommandValidator), comandController.update)

comandRouter.delete('/:id', authentication('Admin'), idValidator(), comandController.delete)



//todo Exported ROOT
//todo ________________________________

module.exports = comandRouter
