import { DataTypes as DT, Model } from "sequelize"; 
import coneccionDb from "../connecctionDb/coneccionDb.js";

class Usuario extends Model{}

Usuario.init({
    userName:{
        type: DT.STRING,
        allowNull:false
    }
    
},{
    sequelize: coneccionDb,
    modelName:"Usuario"
})

export default Usuario