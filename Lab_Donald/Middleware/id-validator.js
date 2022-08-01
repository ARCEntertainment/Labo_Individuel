//? ///////////////////////// MIDDLEWARE ID Validator /////////////////////////


//todo IMPORTATION Mongoose
//todo _____________________________________
const mongoose = require('mongoose')




//todo STRUCTURE Function (Verification validation [ID])
//todo _____________________________________
const idValidator = (req, res, next) => {
    return (req, res, next) => {
        const id = req.params.id

        if (!mongoose.isValidObjectId(id)) {
            res.sendStatus(400)
            return
        }
        next()
    }
}





//todo EXPORTE Id Validator
//todo _____________________________________
module.exports = idValidator