import { DataTypes as DT, Model } from "sequelize"; 
import coneccionDb from "../connecctionDb/coneccionDb.js";

class Usuario extends Model{}

Usuario.init({
    usuarioId: {
        type: DT.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName:{
        type: DT.STRING,
        allowNull: false,
        unique: true,
        validate:{
            len: [4, 25],
            isEmail:true
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
        unique: true,
        validate:{
            len: [8]
        }
    },
    roleId:{
        type:DT.INTEGER
    }
    
},{
    sequelize: coneccionDb,
    modelName:"Usuario",
    timestamps:false
})

export default Usuario