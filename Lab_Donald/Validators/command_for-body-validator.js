//? ///////////////////////// YUP BURGER Validator /////////////////////////

const statusRegex = /^(Engage)|(in progress)|(finish)$/i;
const idRegex = /^[a-f\d]{24}$/i;


//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')



//todo STRUCTURE Validator
//todo ____________________________
const commandValidator = yup.object({

    idClient: yup.string().required().matches(idRegex),
    burgers: yup.array().of(yup.object({idBurger: yup.string().matches(idRegex), suplement: yup.array()})),
    status: yup.string().required().matches(statusRegex),

})

// Creer 2eme validator Update sans (idClient)



//todo EXPORT Validator
//todo ____________________________
module.exports = commandValidator