import { DataTypes as DT, Model } from "sequelize";
import coneccionDb from "../connecctionDb/coneccionDb.js";

class Paquete extends Model {}

Paquete.init({
    destino:{
        type: DT.STRING,
        allowNull: false
    },
    medioTrasporte:{
        type: DT.STRING,
        allowNull: false
    },
    fechaPartida:{
        type: DT.DATE,
        allowNull: false
    },
    fechaRegreso:{
        type: DT.DATE,
        allowNull: false
    },
    cantidadDias:{
        type: DT.INTEGER,
        allowNull: false
    },
    valor:{
        type: DT.FLOAT(10, 2),
        allowNull: false
    }

},{
    sequelize: coneccionDb,
    modelName: "Paquete"

})

export default Paquete