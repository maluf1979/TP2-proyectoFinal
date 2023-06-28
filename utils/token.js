import "dotenv/config.js";
import JWT from 'jsonwebtoken'

const secret = process.env.JWT_SECRET;

export const generarToken = (payload) => {
    const token = JWT.sign( { payload }  , secret,{
        expiresIn:'1h'
    })
    return token
}

export const verificarToken = (token) => {
    return JWT.verify(token, secret)
}

