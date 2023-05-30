import { Sequelize } from "sequelize";

const coneccionDb = new Sequelize("lunes", "root","",{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

try{
    await coneccionDb.authenticate();
    console.log('Connection has been established successfully.');
}catch(err){
    console.log('Unable to connect to the database:', err);
}

export default coneccionDb