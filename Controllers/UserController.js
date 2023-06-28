
import { Usuario, Role } from "../Models/index.js";
import { generarToken, verificarToken } from '../utils/token.js'



class UserController {
  constructor() {}

  createUser = async (req, res, next) => {
    try {
      const { userName,nombre, dni, apellido, password, role } = req.body;
      const result = await Usuario.create({ userName,nombre, dni, apellido, password, role });
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
        attributes:["id", "userName", "nombre", "apellido", "dni"],
        include : [{
          model: Role,
          attributes:["roleName"]
        }]
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
        attributes:["id", "userName", "nombre", "apellido", "dni"],
        include : [{
          model:Role,
          attributes:["roleName"]
        }]

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
        const {userName,nombre, dni, apellido, password, role} = req.body;
        const result = await Usuario.update({userName,nombre, dni, apellido, password, role},{
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

  login = async (req, res, next) =>{
    try {
      const {userName, password} = req.body
      const result = await Usuario.findOne({
        where: {userName}
      });

      if(!result) throw new Error("Credenciales incorrectas")
      const compare = await result.validatePassword(password, result.password)
      if(!compare) throw new Error("Credenciales incorrectas")

      const payload = {
        id: result.id,
        userName: result.userName,
        roleId: result.roleId
      }
      const token = generarToken(payload)
      res.cookie("token", token);

      res
        .status(200)
        .send({ success: true, message: "Usuario logueado con exito" });
    } catch (error) {
      res.status(400).send({success:false, result:error.message})
    }
  }

  me = async (req, res, next) =>{
    const {user} = req
    res
    .status(200)
    .send({ success: true, message: "Usuario", user });
  }

  logout = async (req, res, next) => {
    res.cookie("token" , "")
    res
        .status(200)
        .send({ success: true, message: "Usuario deslogueado" });
  }
}

export default UserController;