//? ///////////////////////// MISE En PLACE ROOTING Client (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________
const clientRooter = require('express').Router()
const clientController = require('../Controllers/client-controller')
const idValidator = require('../Middleware/id-validator')




//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------
clientRooter.get('/', clientController.getAll)

clientRooter.get('/:id', idValidator(), clientController.getById)

//todo clientRooter.post('/', clientController.creat)

clientRooter.put('/:id', idValidator(), clientController.update)

clientRooter.delete('/:id', idValidator(), clientController.delete)



//todo Exported ROOT
//todo ________________________________
module.exports = clientRooter