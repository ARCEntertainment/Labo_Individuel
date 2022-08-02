//? ///////////////////////// CONTROLLERS Authentication (Identification) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
const Client = require('../Models/client-model')
const argon2 = require('argon2')
const jwtUtils = require('../Utils/client-jwt')




//todo CONTROLLER Authentication configuration
//todo ________________________________


const authController = {

    //! LOGIN

    login: async (req, res) => {

        //* TOOLS
        //* --------------------------------------
        const { credential, password } = req.body

        const credentialFilters = { $or: [{ email: credential }, { pseudo: credential }] }

        const user = await Client.findOne(credentialFilters)


        //* STRUCTURE
        //* -------------------------------------

        if (!user) {
            return res.status(401).json({ error: 'Bad Credential' })
        }
        // ELSE

        const ifPasswordValid = await argon2.verify(user.password, password)
        //-----------------------------------------------------------------


        if (!ifPasswordValid) { // si password non valider
            return res.status(401).json({ error: 'Bad Credential' })
        }
        // ELSE si password valider

        const token = await jwtUtils.generate(user)
        return res.json({ token })
    },
    //todo-------------------------------------------------------------------------------


    //! REGISTER

    register: async (req, res) => {

        //* Recuperation des Information dans le BODY
        //* --------------------------------
        const {firstname, lastname, adress, email, pseudo, password} = req.body


        //* Recuperation Password HASH
        //* -----------------------------
        const hashedPassword = await argon2.hash(password)


        //* Creation Nouvelle Utilisateur
        //* ------------------------------
        const clientToInsert = Client({
            firstname,
            lastname,
            adress,
            email,
            pseudo,
            password: hashedPassword
        })

        //* Sauvegarde de l'Utilisateur dans la DB
        //* ------------------------------
        await clientToInsert.save()

        const token = await jwtUtils.generate(clientToInsert)

        return res.status(200).json({token})
    }

}



// Exported CONTROLLER Authentifier
// ________________________________
module.exports = authController



