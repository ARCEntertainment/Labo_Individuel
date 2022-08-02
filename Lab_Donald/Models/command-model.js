//? ///////////////////////// CREATION MODEL et SHEMA (Commande) /////////////////////////



//todo Initialising MONGOOSE (Schema)
//todo _______________________________
const { Schema, model, Types } = require('mongoose')
const Burger = require('./burger-model')
const Client = require('./client-model')




//todo SCHEMA configuration
//todo ________________________________
const comandSchema = new Schema(

    // STRUCTURE
    {
        idClient: { //! A changer avec COLLECTION USERS [ID]

            type: Types.ObjectId,
            ref: Client,
            require: true,
            trim: true,

        },

        burgers: [
            {
                idBurger: {
                    type: Types.ObjectId,
                    ref: Burger,
                    require: true,
                },
            }
        ],

        status: {
            type: String,
            require: true,
            enum: ['Engage', 'in progress', 'finish'],
            default: 'Engage'

        },

        suplement: {
            type: String,
            trim: true,
            enum: ['Crudity', 'Salsa', 'Cheese', 'Double Meat', 'nean'],
            default: 'nean'

        }
    },

    // OPTION
    {
        collection: 'Command',
        timestamps: true
    }
)




//todo MODEL creation
//todo ________________________________

const Command = model('Command', comandSchema)





//todo Exported MODEL
//todo _____________________________________

module.exports = Command