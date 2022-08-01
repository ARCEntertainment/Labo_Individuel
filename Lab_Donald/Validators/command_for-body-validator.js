//? ///////////////////////// YUP BURGER Validator /////////////////////////

const statusRegex = /^(Engage)|(in progress)|(finish)$/i;
const idRegex = /^[a-f\d]{24}$/i;


//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')



//todo STRUCTURE Validator
//todo ____________________________
const commandValidator = yup.object({

    nameClient: yup.string().required().trim().min(2).max(50),
    nameBurger: yup.string().required().trim().min(3).max(50),
    idBurger: yup.string().required().matches(idRegex),

    adressClient: {
        codepostal: yup.string().required().trim().min(4).max(4),
        ville: yup.string().required().trim().min(2).max(25),
        rue: yup.string().required().trim().min(2).max(25),
        numero: yup.string().required().trim().min(2).max(4),
    },
    status: yup.string().required().matches(statusRegex),
})



//todo EXPORT Validator
//todo ____________________________
module.exports = commandValidator