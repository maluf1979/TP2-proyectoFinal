import "dotenv/config.js";
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET;

export const generarToken = (payload) => {
    const token = jwt.sign( { payload }  , secret,{
        expiresIn:'1h'
    })
    return token
}

export const verificarToken = (token) => {
    return jwt.verify(token, secret)
}

