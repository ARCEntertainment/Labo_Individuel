//? ///////////////////////// YUP CLIENT Validator /////////////////////////


//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')



//todo STRUCTURE Validator
//todo ____________________________

//* CLIENT Validation
// --------------

const clientValidator = yup.object({

    firstname: yup.string().required().max(150).trim(),
    lastname: yup.string().required().max(150).trim(),

    adress: {
        codepostal: yup.number().required(),
        ville: yup.string().required().trim(),
        rue: yup.string().required().trim(),
        numero: yup.string().required().trim(),
    },

    email: yup.string().required().email().max(255).trim(),
    pseudo: yup.string().required().min(3).max(50).trim()

})


//todo EXPORT Validator
//todo ____________________________
module.exports = clientValidator