//? ///////////////////////// YUP BURGER Validator /////////////////////////




//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')



//todo STRUCTURE Validator
//todo ____________________________
const burgerValidator = yup.object({
    name: yup.string().required().trim().min(3).max(50),
    ingredient: yup.array(),
    prix: yup.number().required(),
    alergene: yup.array(), // yup.array modifier
})



//todo EXPORT Validator
//todo ____________________________
module.exports = burgerValidator