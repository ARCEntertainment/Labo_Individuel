//? ///////////////////////// CONTROLLERS clients /////////////////////////



//todo imported DTO
//todo ________________________________
const clientDTO = require('../DTO/client-dto')



//todo imported MODELS (clients)
//todo ________________________________
const Client = require('../Models/client-model')



//todo FUNCTION Mappage CLIENT
//todo _________________________________
const clientMapToDTO = (client) => new clientDTO(client.id, client.pseudo, client.email, client.firstname, client.lastname, client.adress)


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

        // Structur Find
        const clientALL = await Client.find()


        // DTO Conversion
        const clientToDto = clientALL.map(clientMapToDTO)

        res.status(200).json(clientToDto)
    },


    getById: async (req, res) => {
        const id = req.params.id

        // Structure Find
        const clients = await Client.findById(id)

        if (!clients) {
            return res.sendStatus(404)
        }

        // DTO Conversion
        const clientToDto = clientMapToDTO(clients)
        res.status(200).json(clientToDto)
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
                pseudo: req.body.pseudo,
            },


            // OPTION
            {
                returnDocument: 'after'
            }
        )

        if (clientUpdate) {

            // DTO Conversion
            const clientToDto = clientMapToDTO(clientUpdate)
            return res.status(200).json(clientToDto)
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