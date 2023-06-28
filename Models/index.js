
import Usuario from "./Usuario.js";
import Paquete from "./Paquete.js";
import Role from "./Role.js";

//relacion de Role con Usuario
Role.hasMany(Usuario,{
    foreignKey:{
        name:"roleId"
    }
})
Usuario.belongsTo(Role,{
    foreignKey:{
        name:"roleId"
    }
})
//relacion de Usuario con Paquete
Usuario.belongsToMany(Paquete, { through: 'UsuarioPaquete' });
Paquete.belongsToMany(Usuario, { through: 'UsuarioPaquete' });



export {Usuario, Paquete, Role}