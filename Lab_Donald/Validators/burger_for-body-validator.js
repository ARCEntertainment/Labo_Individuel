//? ///////////////////////// YUP BURGER Validator /////////////////////////




//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')



//todo STRUCTURE Validator
//todo ____________________________
const burgerValidator = yup.object({
    name: yup.string().required().trim().min(3).max(50),
    info: yup.string().trim(),
    prix: yup.string().required(),
    alergene: yup.string().required().trim(),
})



//todo EXPORT Validator
//todo ____________________________
module.exports = burgerValidator