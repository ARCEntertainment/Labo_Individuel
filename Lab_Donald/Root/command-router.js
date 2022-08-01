//? ///////////////////////// MISE En PLACE ROOTING Command (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________

const comandRouter = require('express').Router()
const comandController = require('../Controllers/command-controller')
const bodyValidator = require('../Middleware/body-validator')
const idValidator = require('../Middleware/id-validator')
const commandValidator = require('../Validators/command_for-body-validator')



//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

comandRouter.get('/', comandController.getAll)

comandRouter.get('/:id', idValidator(), comandController.getById)

comandRouter.post('/',bodyValidator(commandValidator), comandController.creat) //

comandRouter.put('/:id', idValidator(),bodyValidator(commandValidator), comandController.update)

comandRouter.delete('/:id', idValidator(), comandController.delete)



//todo Exported ROOT
//todo ________________________________

module.exports = comandRouter
