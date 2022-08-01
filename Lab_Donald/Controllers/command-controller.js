//? ///////////////////////// CONTROLLERS Command /////////////////////////



//todo imported MODELS (command)
//todo ________________________________

const Comand = require('../Models/command-model')




//todo CONTROLLER command configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


const comandController = {

    getAll: async (req, res) => {

        const comandAll = await Comand.find()

        res.status(200).json(comandAll)
    },


    getById: async (req, res) => {
        const id = req.params.id

        Comand.findById(id)

        if (!Comand) {
            return res.sendStatus(404)
        }
        res.status(200).json(Comand)
    },


    creat: async (req, res) => {

        const comandToADD = Comand(req.body)

        await comandToADD.save()

        res.status(200).json(comandToADD)
    },


    update: async (req, res) => {
        const id = req.params.id

        const commandUpdate = await Comand.findByIdAndUpdate(id,
            
            // STRUCTURE
            {
                nameClient: req.body.nameClient,
                nameBurger: req.body.nameBurger,
                adressClient: req.body.adressClient,
            }, 


            // OPTION
            {
                returnDocument: 'after'
            }
        )

        if (commandUpdate) {
            res.status(200).json(commandUpdate)
        }
        return res.sendStatus(404)
    },


    delete: async (req, res) => {
        const id = req.params.id

        const comandToDelete = await Comand.findByIdAndDelete(id)

        if (comandToDelete) {
            res.sendStatus(204)
        }
        else {
            return res.sendStatus(404)
        }
    },
}




//todo Exported CONTROLLER
//todo ________________________________
module.exports = comandController