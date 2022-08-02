//? //////////////////////////////////// Json Web Token /////////////////////////////////////////




//todo IMPORT JWT et Environement Variable dédier
//todo ________________________________________________
const jwt = require('jsonwebtoken')
const {JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET} = process.env



//todo STRUCTURE TOKEN
//todo ________________________________________________


const jwtUtils = {


    //! Function GENERATION TOKEN
    //! ----------------------------
    generate: ({id, pseudo, role}) => {

        return new Promise ((resolve, reject) => {

            //* Implementation des donné (payload option signature)
            const payload = {id, pseudo, role}

            const option = {
                algorithm: 'HS512',
                expiresIn: '48h',
                audience: JWT_AUDIENCE,
                issuer: JWT_ISSUER,
            }

            //* Structure Generation
            jwt.sign(payload, JWT_SECRET, option, (error, token) => {

                if (error) {
                    return reject(error)
                }
                resolve(token)
            })
        });
    },


    //! Function DECODER TOKEN
    //! -----------------------------
    decode: (token) => {

        if (!token) {
            return Promise.reject(new error('no token'))
        }
        //* ELSE si Trouver TOKEN
        return new Promise((resolve, reject) => {

            const option = {
                audience: JWT_AUDIENCE,
                issuer: JWT_ISSUER
            }

            jwt.verify(token, JWT_SECRET, option, (error, payload) => {

                if (error) {
                    return reject(error)
                }
                resolve(payload)
            })
        })
    }
}



//todo EXPORT TOKEN
//todo ______________________________________________

module.exports = jwtUtils