import {Usuario} from "../Models/index.js"

const usuarioSeed = async () => {
    try {
        await Usuario.create(
            {userName:'usuario@test.com',
             password:'1234',
             nombre:'juan',
             apellido:'ramirez',
             dni: 30000000,
             //salt:'',
             roleId: 1
             }     
            );
    } catch (error) {
        console.log(error.message);
    }
};

export default usuarioSeed