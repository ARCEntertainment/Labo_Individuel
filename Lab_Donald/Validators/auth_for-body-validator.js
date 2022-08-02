//? ///////////////////////// YUP AUTHENTICATION Validator /////////////////////////


//  REGEX Implentation
//  _____________________________________
const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;


//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')



//todo STRUCTURE Validator
//todo ____________________________

//* REGISTER validation
// --------------

const registerValidator = yup.object({

    firstname: yup.string().required().max(150).trim(),
    lastname: yup.string().required().max(150).trim(),

    adress: {
        codepostal: yup.number().required(),
        ville: yup.string().required().trim(),
        rue: yup.string().required().trim(),
        numero: yup.string().required().trim(),
    },

    email: yup.string().required().email().max(255).trim(),
    pseudo: yup.string().required().min(3).max(50).trim(),
    password: yup.string().required().min(8).max(64).matches(pwdRegex)
})


//* LOGIN validation
// --------------

const loginValidator = yup.object({

    credential: yup.string().trim().required().max(255),
    password: yup.string().required()
})



//todo EXPORT Validator
//todo ____________________________
module.exports = { registerValidator, loginValidator }