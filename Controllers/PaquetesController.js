import { Paquete } from "../Models/index.js";

class PaqueteController {
  constructor() {}

  createPaquetes = async (req, res, next) => {
    try {
      const { destino, medioTransporte, fechaPartida, fechaRegreso, cantidadDias, valor } = req.body;
      const result = await Paquete.create({ destino, medioTransporte, fechaPartida, fechaRegreso, cantidadDias, valor });
      if (!result.dataValues) throw new Error("No se pudo crear el Paquete");
      res
        .status(200)
        .send({ success: true, message: "Paquete creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };

  getAllPaquetes = async (req, res, next) => {
    try {
      const result = await Paquete.findAll({
        attributes:["id", "destino", "medioTransporte", "fechaRegreso", "fechaPartida", "valor"]
      });
      if (result.length === 0) throw new Error("No se encontraron Paquetes");
      res.send({ success: true, message: "Paquetes encontrados", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };


  getPaqueteById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Paquete.findOne({
        where: {
          id:id
        },
        attributes:["id", "destino", "medioTransporte", "fechaRegreso", "fechaPartida", "valor"]

      });
      if (!result) throw new Error("No se encontro el  Paquete");
      res.send({ success: true, message: "Paquete encontrado", result });
    } catch (error) {
        res.status(400).send({ success: false, result: error.message });
    }
  };
  
  updatePaqueteById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {destino,medioTransporte, fechaPartida, fechaRegreso, cantidadDias, valor} = req.body;
        const result = await Paquete.update({destino,medioTransporte, fechaPartida, fechaRegreso, cantidadDias, valor},{
            where:{
                id:id
            }
        })
        if (!result.dataValues) throw new Error("No se pudo actualizar el Paquete");
        res
        .status(200)
        .send({ success: true, message: "Paquete actualizado con exito" });
    } catch (error) {
        res.status(400).send({success:false, result:error.message})
    }
  };
  deletePaqueteById = async (req, res, next) => {
    try {
        const result = await Paquete.destroy({
            where: {id: id}
          });
        if(!result.dataValues) throw new Error("No se pudo eliminar");
        res
        .status(200)
        .send({ success: true, message: "Paquete eliminado con exito" });
    } catch (error) {
        res.status(400).send({success:false, result:error.message})
    }
  };
}

export default PaqueteController;