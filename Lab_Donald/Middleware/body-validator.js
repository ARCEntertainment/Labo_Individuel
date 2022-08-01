//? ///////////////////////// MIDDLEWARE BODY Validator (YUP) /////////////////////////


//todo IMPORTATION Mongoose
//todo _____________________________________
const mongoose = require('mongoose')



//todo STRUCTURE Function (Verification et validation des Models [Burger / Command])
//todo _____________________________________
const bodyValidator = (yupValidator) => {
    return async (req, res, next) => {
        try {
            const valideData = await yupValidator.noUnknown(req.body, {abortEarly: false})
            req.body = valideData
            next()
        }
        catch (e) {
            res.sendStatus(400)
        }
    }
}



//todo EXPORTE BODY Validator
//todo _____________________________________
module.exports = bodyValidator