import { DataTypes as DT, Model } from "sequelize"; 
import coneccionDb from "../connecctionDb/coneccionDb.js";

class Usuario extends Model{}

Usuario.init({
    userName:{
        type: DT.STRING,
        allowNull: false,
        unique: true,
        validate:{
            len: [4, 25]
        }
    },
    password:{
        type: DT.STRING,
        allowNull: false,
        validate:{
            len: [4, 20]
        }
    },
    nombre:{
        type: DT.STRING,
        allowNull: false
    },
    apellido:{
        type: DT.STRING,
        allowNull: false
    },
    dni:{
        type: DT.BIGINT(8) ,
        allowNull: false,
        validate:{
            len: [8]
        }
    }
    
},{
    sequelize: coneccionDb,
    modelName:"Usuario",
    timestamps:false
})

export default Usuario