//? ///////////////////////// CONTROLLERS Burger /////////////////////////



//todo imported MODELS (category)
const Burger = require('../Models/burger-model')


//todo CONTROLLER Category configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete

const burgerController = {

    getALL: async (req, res) => {

        const burgers = await Burger.find()

        res.status(200).json(burgers)
    },
    //* ------------------------------------------


    getById: async (req, res) => {
        const id = req.params.id

        Burger.findById(id)


        if (!Burger) {
            return res.sendStatus(404)
        }

        else {
            res.status(200).json(Burger)
        }
    },
    //* ------------------------------------------


    creat: async (req, res) => {

        const burgerToADD = Burger(req.body)


        await burgerToADD.save()
        res.status(200).json(burgerToADD)

    },
    //* ------------------------------------------


    update: async (req, res) => {
        const id = req.params.id

        const burgerUpdate = await Burger.findByIdAndUpdate(id,

            // STRUCTURE
            {
                name: req.body.name,
                info: req.body.info,
                prix: req.body.prix
            },

            // OPTION
            {
                returnDocument: 'after'
            }
        )

        if (burgerUpdate) {
            res.status(200).json(burgerUpdate)
        }
        return res.sendStatus(404)

    },
    //* ------------------------------------------


    delete: async (req, res) => {
        const id = req.params.id

        const burgerToDelete = await Burger.findByIdAndDelete(id)

        if (!burgerToDelete) {

            return res.sendStatus(404)
        }
        res.sendStatus(204)

    }
    //* ------------------------------------------
}




//todo Exported CONTROLLER
//todo ________________________________

module.exports = burgerController