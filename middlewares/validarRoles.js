import { verificarToken } from "../utils/token.js";

export const validarRol = (req, res, next) =>{
    try {
        const {token} = req.cookies
        if (!token) throw new Error("No hay token")
        const {payload} = verificarToken(token)
        if(!payload) throw new Error("No hay payload")

        if (payload.roleId !== 1) throw new Error("No tienes los permisos necesarios");
        req.user = payload

        next()
    } catch (error) {
        next(error)
    }

}