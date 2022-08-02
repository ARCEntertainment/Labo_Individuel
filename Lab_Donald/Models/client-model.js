//? ///////////////////////// CREATION MODEL et SHEMA (Client) /////////////////////////



//todo Initialising MONGOOSE (Schema)
//todo _______________________________
const { Schema, model } = require('mongoose')




//todo SCHEMA configuration
//todo ________________________________

const clientSchema = new Schema(

    // STRUCTURE
    {
        firstname: {
            type: String,
            require: true,
            trim: true
        },

        lastname: {
            type: String,
            trim: true,
            require: true
        },

        adress: {

            codepostal: {
                type: Number,
                require: true,
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

        email: {
            type: String,
            unique: true,
            require: true,
            trim: true
        },

        pseudo: {
            type: String,
            unique: true,
            require: true,
            trim: true

        },

        password: {
            type: String,
            require: true,
        },

        role: {
            type: String,
            enum: ['User', 'Moderator', 'Admin'],
            require: true,
            default: 'User'
        }
    },

    // OPTION
    {
        collection: 'Client',
        timestamps: true
    }
)



//todo MODEL creation
//todo ________________________________
const Client = model('Client', clientSchema)




//todo Exported MODEL
//todo ________________________________
module.exports = Client