
import Usuario from "./Usuario.js";
import Paquete from "./Paquete.js";

Usuario.hasMany(Paquete);
Paquete.belongsTo(Usuario);

export {Usuario, Paquete}