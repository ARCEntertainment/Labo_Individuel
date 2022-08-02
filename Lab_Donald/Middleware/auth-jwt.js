//? ///////////////////////// MIDDLEWARE Authentication JWT (YUP) /////////////////////////

// TOOLS Imported
// ________________________
const jwtUtils = require('../Utils/client-jwt')
const Client = require('../Models/client-model')



//todo STRUCTURE Verification et Decode
//todo ____________________________________________________
const authentication = (role/*option*/) => {

    return async (req, res, next) => {

        //* Impentation
        const authHeader = req.header['authorization']
        const token = authHeader ? authHeader.split(' ')[1] : false;


        //* Si pas de TOKEN / REFUSER
        if (!token) {
            return res.sendStatus(401) // sans Token l'Acces est Refusé
        }


        //* Si TOKEN Trouvé / DECODER
        let decodedToken;


        try {
            decodedToken = await jwtUtils.decode(token)
        }

        catch (error) {
            return res.sendStatus(403) // le TOKEN n'as pas été décodé
        }


        //* Si TOKEN Decodé / VALIDER
        // ----Verification du tableau des ROLE dans [DB]
        // --------------

        if (role) {

            // TOOLS imported
            const clientDB = await Client.findById(decodedToken.id)
            const clientRoleInDB = clientDB.role

            // VERIFICATION
            if (!role.includes(clientRoleInDB)) {
                return res.sendStatus(403) // les ROLE n'on pas été trouvé
            }
        }
        // ELSE
        req.user = decodedToken //! /!\ pas sur de '.user' pt '.client' /!\
        next()
    }
}


//todo EXPORTED Middleware
//todo ______________________________________________________
module.exports = authentication