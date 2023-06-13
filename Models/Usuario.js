import bcrypt from "bcrypt"
import { DataTypes as DT, Model } from "sequelize"; 
import coneccionDb from "../connecctionDb/coneccionDb.js";

class Usuario extends Model{
    validatePassword = async (password, hash)=>{
        return await bcrypt.compare(password, hash)
    }
}

Usuario.init({
    userName:{
        type: DT.STRING,
        allowNull: false,
        unique: true,
        validate:{
            len: [4, 25],
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
    salt:{
        type: DT.STRING
    },
    roleId:{
        type: DT.INTEGER,
        defaultValue:2
    }
    
},{
    sequelize: coneccionDb,
    modelName:"Usuario",
    timestamps:false
});

Usuario.beforeCreate(async (user)=>{
    const salt = await bcrypt.genSalt();
    user.salt = salt;

    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
})

export default Usuario