import { UsuarioPaquete } from "../Models/index.js";

class UsuarioPaqueteController{
    constructor() {}

    createUsuarioPaquete = async (req, res, next) =>{
        try {
            const {usuarioId, paqueteId} = req.body
            const result = await UsuarioPaquete.create({usuarioId, paqueteId})
            if (!result.dataValues) throw new Error("No se pudo generar la reserva")
            res.status(200).send({ success: true, message: "Reserva generada con exito" });
        } catch (error) {
            res.status(400).send({ success: false, result: error.message });
        }
    };
    getAllUsuariosPaquetes = async (req, res, next) => {
        try {
          const result = await UsuarioPaquete.findAll({
            attributes:["usuarioId", "paqueteId"]
          });
          if (result.length === 0) throw new Error("No se encontraron reservas");
          res.send({ success: true, message: "Reservas encontradas", result });
        } catch (error) {
          res.status(400).send({ success: false, result: error.message });
        }
      };
      getUsuarioPaqueteById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const result = await UsuarioPaquete.findOne({
            where: {
              id:id
            },
            attributes:["usuarioId", "paqueteId"]
    
          });
          if (!result.dataValues) throw new Error("No se encontro la reserva");
          res.send({ success: true, message: "Reserva encontrada", result });
        } catch (error) {
            res.status(400).send({ success: false, result: error.message });
        }
      };
      
      updateUsuarioPaqueteById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const {usuarioId, paqueteId} = req.body;
            const result = await UsuarioPaquete.update({usuarioId, paqueteId},{
                where:{
                    id:id
                }
            })
            if (!result.dataValues) throw new Error("No se pudo actualizar la reserva");
            res.status(200).send({ success: true, message: "Reserva actualizada con exito" });
        } catch (error) {
            res.status(400).send({success:false, result:error.message})
        }
      };
      deleteUsuarioPaqueteById = async (req, res, next) => {
        try {
            const result = await UsuarioPaquete.destroy({
                where: {
                    id: id
                }
              });
            if(!result.dataValues) throw new Error("No se pudo eliminar la reserva");
            res.status(200).send({ success: true, message: "Reserva eliminada con exito" });
        } catch (error) {
            res.status(400).send({success:false, result:error.message})
        }
      };
}

export default UsuarioPaqueteController