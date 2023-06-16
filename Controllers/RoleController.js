import { Role } from "../Models/index.js";

class RoleController {
  constructor() {}

  createRole = async (req, res, next) => {
    try {
      const { roleName } = req.body;
      const result = await Role.create({roleName});
      if (!result.dataValues) throw new Error("No se pudo crear el usuario");
      res
        .status(200)
        .send({ success: true, message: "Rol creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };

  getAllRoles = async (req, res, next) => {
    try {
      const result = await Role.findAll({
        attributes:["roleName"],
      });
      if (!result.length === 0) throw new Error("No se encontraron roles");
      res
        .status(200)
        .send({ success: true, message: "Roles encontrados" , result});
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };  

  getRoleById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Role.findOne({
        where:{
          id: id
        },
        attributes:["roleName"]
      });
      if (!result.dataValues) throw new Error("No se encontro el rol");
      res
        .status(200)
        .send({ success: true, message: "Rol encontrado" , result});
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  }; 
   updateRoleById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { roleName } = req.body;
      const result = await Role.update({ roleName },{
        where:{
          id: id
        },
      });
      if (!result.dataValues) throw new Error("No se pudo actualizar el rol");
      res
        .status(200)
        .send({ success: true, message: "Rol actualizado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  }; 
   deleteRoleById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Role.destroy({
        where:{
          id: id
        }
      });
      if (!result.dataValues) throw new Error("No se pudo eliminar el rol");
      res
        .status(200)
        .send({ success: true, message: "Rol eliminado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default RoleController