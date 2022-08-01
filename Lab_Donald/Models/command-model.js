//? ///////////////////////// CREATION MODEL et SHEMA (Commande) /////////////////////////



//todo Initialising MONGOOSE (Schema)
//todo _______________________________
const { Schema, model } = require('mongoose')




//todo SCHEMA configuration
//todo ________________________________
const comandSchema = new Schema(

    // STRUCTURE
    {
        nameClient: { //! A changer avec COLLECTION USERS [ID]

            type: String,
            require: true,
            trim: true,

        },

        nameBurger: {
            type: String,
            require: true,
            trim: true
        },

        idBurger: {
            type: String,
            require: true,
        },

        adressClient: {

            codepostal: {
                type: String,
                require: true,
                trim: true,
            },

            ville: {
                type: String,
                require: true,
                trim: true,
            },

            rue: {
                type: String,
                require: true,
                trim: true,
            },

            numero: {
                type: String,
                require: true,
                trim: true,
            }
        },

        status: {
                type: String,
                require: true,
                enum: ['Engage', 'in progress', 'finish'],
                default: 'Engage'

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