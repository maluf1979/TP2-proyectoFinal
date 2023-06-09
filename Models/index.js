
import Usuario from "./Usuario.js";
import Paquete from "./Paquete.js";
import Role from "./Role.js";
import UsuarioPaquete from "./UsuarioPaquete.js";

//relacion de Role con Usuario
Role.hasMany(Usuario,{
    foreignKey:"id"
})
Usuario.belongsTo(Role,{
    foreignKey:{
        name:"roleId"
    }
})

//relacion de Usuario con UsuarioPaquete
//falta poner algun ON DELETE CASCADE ON UPDATE CASCADE????????????????
Usuario.hasMany(UsuarioPaquete,{
    foreignKey:{
        name:"id"
    }
})
UsuarioPaquete.belongsTo(Usuario,{
    foreignKey:{
        name:"usuarioId"
    }
    
})

//relacion entre Paquete con UsuarioPaquete
//falta poner algun ON DELETE CASCADE ON UPDATE CASCADE????????????????
Paquete.hasMany(UsuarioPaquete,{
    foreignKey:{
        name:"id"
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