import { DataTypes as DT, Model } from "sequelize";
import coneccionDb from "../connecctionDb/coneccionDb.js";

class Role extends Model {}

Role.init({
    roleName:{
        type:DT.STRING,
        defaultValue:"user"
    }
},{
    sequelize: coneccionDb,
    modelName: "Role",
    timestamps:false

})

export default Role