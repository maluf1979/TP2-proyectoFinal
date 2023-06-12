
import Usuario from "./Usuario.js";
import Paquete from "./Paquete.js";
import Role from "./Role.js";
import UsuarioPaquete from "./UsuarioPaquete.js";

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

//relacion de Usuario con UsuarioPaquete
//falta poner algun ON DELETE CASCADE ON UPDATE CASCADE
Usuario.hasMany(UsuarioPaquete,{
    foreignKey:{
        name:"usuarioId"
    }
})
UsuarioPaquete.belongsTo(Usuario,{
    foreignKey:{
        name:"usuarioId"
    }
    
})

//relacion entre Paquete con UsuarioPaquete
Paquete.hasMany(UsuarioPaquete,{
    foreignKey:{
        name:"paqueteId"
    }
})
UsuarioPaquete.belongsTo(Paquete,{
    foreignKey:{
        name:"paqueteId"
    }
})


//Usuario.hasMany(Paquete);
//Paquete.belongsTo(Usuario);

export {Usuario, Paquete, Role, UsuarioPaquete}