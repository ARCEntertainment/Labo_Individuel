//? ///////////////////////// CREATION MODEL et SHEMA (Burger) /////////////////////////



//todo Initialising MONGOOSE (Schema)
//todo _______________________________
const { Schema, model } = require('mongoose')



//todo SCHEMA configuration
//todo ________________________________
const burgerSchema = new Schema(

    // STRUCTURE
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        info: {
            type: String,
            trim: true,
            enum: ['Beef', 'Fish', 'Tofu', 'Cheese', 'Crudity', 'Salsa'],
            default: 'Beef'

        },
        prix: {
            type: String,
            require: true,
            trim: true

        }

    },

    // OPTION
    {
        collection : 'Burger',
        timestamps : true
    })



//todo MODEL creation
//todo ________________________________
const Burger = model('Burger', burgerSchema)




//todo Exported MODEL
//todo ________________________________
module.exports = Burger