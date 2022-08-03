//? ///////////////////////// MISE En PLACE ROOTING Client (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________
const clientRooter = require('express').Router()
const clientController = require('../Controllers/client-controller')
const authentication = require('../Middleware/auth-jwt')
const idValidator = require('../Middleware/id-validator')
const bodyValidator = require('../Middleware/body-validator')
const clientValidator = require('../Validators/client_for-body-validator')




//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------
clientRooter.get('/', authentication(), clientController.getAll)

clientRooter.get('/:id', authentication(), bodyValidator(clientValidator), idValidator(), clientController.getById)

clientRooter.put('/:id', authentication(), bodyValidator(clientValidator), idValidator(), clientController.update)

clientRooter.delete('/:id', authentication('Admin'), idValidator(), clientController.delete)



//todo Exported ROOT
//todo ________________________________
module.exports = clientRooter