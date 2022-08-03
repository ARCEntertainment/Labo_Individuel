//? ///////////////////////// CONTROLLERS Burger /////////////////////////



//todo imported MODELS (category)
const Burger = require('../Models/burger-model')
const { ArraySchema } = require('yup')


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

        // Offset and Limit Declaration
        const offset = req.query.offset ? req.query.offset : 0
        const limit = req.query.limit ? req.query.limit : 10

        // Filter Creation
        let alergeneFilters;
        let ingredientFilters;
        const ingredient = req.query.ingredient
        const alergene = req.query.alergene

        // Structure Alergene Find
        if (alergene) {


            if (Array.isArray(alergene)) {
                alergeneFilters = { alergene: { $nin: alergene } }
                // ingredientFilters = { ingredient: { $in: ingredient } }
            }
            else {
                alergeneFilters = { alergene: alergene }
                // ingredientFilters = { ingredient: ingredient }
            }
        }

        else {
            alergeneFilters = {}
            // ingredientFilters = {}
        }


        // Structure Ingredient Find
        if (ingredient) {


            if (Array.isArray(alergene)) {
                ingredientFilters = { ingredient: { $in: ingredient } }
            }
            else {
                ingredientFilters = { ingredient: ingredient }
            }
        }

        else {
            ingredientFilters = {}
        }

        // Structure Find
        const burgers = await Burger.find({ $and: [alergeneFilters, ingredientFilters] })

            // .populate({
            //     path: 'name',
            //     // selecte: {name:1}
            // })

            // .populate({
            //     path: 'prix',
            //     // selecte: {name:1}
            // })

            // .populate({
            //     path: 'ingredient',
            //     // selecte: {enum:1}
            // })

            .limit(limit)

            .skip(offset)

        const counts = await Burger.countDocuments()
        const data = { 'Burger': burgers, counts }

        res.status(200).json(data)
    },
    //* ------------------------------------------


    getById: async (req, res) => {
        const id = req.params.id

        const burgers = await Burger.findById(id)


        if (!burgers) {
            return res.sendStatus(404)
        }

        else {
            res.status(200).json(burgers)
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
                ingredient: req.body.ingredient,
                prix: req.body.prix,
                alergene: req.body.alergene
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