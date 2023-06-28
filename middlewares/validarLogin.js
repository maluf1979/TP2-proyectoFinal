import { verificarToken } from "../utils/token.js";

export const validarLogin = (req, res, next) =>{
    try {
        const {token} = req.cookies
        if (!token) throw new Error("No hay token")
        const {payload} = verificarToken(token)
        if(!payload) throw new Error("No hay payload")
        req.user = payload
        next()
    } catch (error) {
        next(error)
    }   
}