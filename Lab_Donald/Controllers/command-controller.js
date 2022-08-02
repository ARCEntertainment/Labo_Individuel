//? ///////////////////////// CONTROLLERS Command /////////////////////////



//todo imported MODELS (command)
//todo ________________________________

const { ArraySchema } = require('yup')
const { populate } = require('../Models/burger-model')
const Command = require('../Models/command-model')




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

        const comandAll = await Command.find()

            .populate({
                path: 'idClient',
                select: { firstname: 1, lastname: 1, adress: 1 }
            })

            .populate({
                path: 'burgers',
                populate: { path: 'idBurger', select: { name: 1, info: 1, prix: 1, alergene: 1 } }
            })

        res.status(200).json(comandAll)
    },


    getById: async (req, res) => {
        const id = req.params.id

        const command = await Command.findById(id)


            .populate({
                path: 'idClient',
                select: { firstname: 1, lastname: 1, adress: 1 }
            })

            .populate({
                path: 'burgers',
                populate: { path: 'idBurger', select: { name: 1, info: 1, prix: 1, alergene: 1 } }
            })


        if (!command) {
            return res.sendStatus(404)
        }
        res.status(200).json(command)
    },


    creat: async (req, res) => {

        const comandToADD = Command(req.body)

        await comandToADD.save()

        res.status(200).json(comandToADD)
    },


    update: async (req, res) => {
        const id = req.params.id

        const commandUpdate = await Command.findByIdAndUpdate(id,

            // STRUCTURE
            {
                idClient: req.body.idClient,
                burgers: req.body.burgers,
                status: req.body.status,
                suplement: req.body.suplement,
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

        const comandToDelete = await Command.findByIdAndDelete(id)

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