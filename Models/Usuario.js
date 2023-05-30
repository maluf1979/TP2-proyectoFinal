import { DataTypes as DT, Model } from "sequelize"; 
import coneccionDb from "../connecctionDb/coneccionDb.js";

class Usuario extends Model{}

Usuario.init({
    userName:{
        type: DT.STRING,
        allowNull: false
    },
    password:{
        type: DT.STRING,
        allowNull: false
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
        allowNull: false
    }
    
},{
    sequelize: coneccionDb,
    modelName:"Usuario"
})

export default Usuario