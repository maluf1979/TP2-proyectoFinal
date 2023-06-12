import { Usuario } from "../Models/index.js";

class UserController {
  constructor() {}

  createUser = async (req, res, next) => {
    try {
      const { userName,nombre, dni, apellido, password } = req.body;
      const result = await Usuario.create({ userName,nombre, dni, apellido, password });
      if (!result.dataValues) throw new Error("No se pudo crear el usuario");
      res
        .status(200)
        .send({ success: true, message: "Usuario creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };

  getAllUsers = async (req, res, next) => {
    try {
      const result = await Usuario.findAll({
        attributes:["id", "userName", "nombre", "apellido", "dni"]
      });
      if (result.length === 0) throw new Error("No se encontraron usuarios");
      res.send({ success: true, message: "Usuarios encontrados", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };


  getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Usuario.findOne({
        where: {
          id:id
        },
        attributes:["id", "userName", "nombre", "apellido", "dni"]

      });
      if (!result) throw new Error("No se encontro el  usuario");
      res.send({ success: true, message: "Usuario encontrado", result });
    } catch (error) {
        res.status(400).send({ success: false, result: error.message });
    }
  };
  
  updateUserById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {userName,nombre, dni, apellido, password} = req.body;
        const result = await Usuario.update({userName,nombre, dni, apellido, password},{
            where:{
                id:id
            }
        })
        if (!result.dataValues) throw new Error("No se pudo actualizar el usuario");
        res
        .status(200)
        .send({ success: true, message: "Usuario actualizado con exito" });
    } catch (error) {
        res.status(400).send({success:false, result:error.message})
    }
  };
  deleteUserById = async (req, res, next) => {
    try {
        const result = await Usuario.destroy({
            where: {id: id}
          });
        if(!result.dataValues) throw new Error("No se pudo eliminar");
        res
        .status(200)
        .send({ success: true, message: "Usuario eliminado con exito" });
    } catch (error) {
        res.status(400).send({success:false, result:error.message})
    }
  };
}

export default UserController;