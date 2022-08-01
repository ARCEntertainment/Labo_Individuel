//? ///////////////////////// CONTROLLERS clients /////////////////////////



//todo imported MODELS (clients)
//todo ________________________________
const Client = require('../Models/client-model')




//todo CONTROLLER Client configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


const clientController = {

    getAll: async (req, res) => {

        const clientALL = await Client.find()

        res.status(200).json(clientALL)
    },


    getById: async (req, res) => {
        const id = req.params.id

        const clients = await Client.findById(id)

        if (!clients) {
            return res.sendStatus(404)
        }
        res.status(200).json(clients)
    },


    creat: async (req, res) => {

        const clientToAdd = Client(req.body)

        await clientToAdd.save()

        res.status(200).json(clientToAdd)
    },

    update: async (req, res) => {
        const id = req.params.id

        const clientUpdate = await Client.findByIdAndUpdate(id,

            // STRUCTURE
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,

                adresse: {

                    codepostal: req.body.codepostal,
                    ville: req.body.ville,
                    rue: req.body.rue,
                    numero: req.body.numero,
                },

                email: req.body.email,
            },


            // OPTION
            {
                returnDocument: 'after'
            }
        )

        if (clientUpdate) {
            res.status(200).json(clientUpdate)
        }
        return res.sendStatus(404)
    },


    delete: async (req, res) => {
        const id = req.params.id

        const clientToDelete = await Client.findByIdAndDelete(id)

        if (clientToDelete) {
            res.sendStatus(204)
        }
        else {
            return res.sendStatus(404)
        }
    },
}


//todo Exported CONTROLLER
//todo ________________________________
module.exports = clientController