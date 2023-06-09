import { DataTypes as DT, Model } from "sequelize";
import coneccionDb from "../connecctionDb/coneccionDb.js";
import { Usuario, Paquete } from "../Models/index.js";


class UsuarioPaquete extends Model {}

UsuarioPaquete.init({
    usuarioId: {
        type: DT.INTEGER,
        references: {
          model: Usuario, 
          key: 'id'
        }
      },
      paqueteId: {
        type: DT.INTEGER,
        references: {
          model: Paquete,
          key: 'id',
        }
      }

},{
    sequelize: coneccionDb,
    modelName: "UsuarioPaquete",
    timestamps:false
})

export default UsuarioPaquete