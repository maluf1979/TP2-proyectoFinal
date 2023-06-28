import {Paquete} from "../Models/index.js"

const paqueteSeed = async () => {
    try {
        await Paquete.bulkCreate([
            {destino:'Jamaica',
             medioTransporte:'Aereo',
             fechaPartida:'2023/08/03',
             fechaRegreso:'2023/08/06',
             cantidadDias: 3,
             valor:20000,
             }     
            ]);
    } catch (error) {
        console.log(error.message);
    }
};

export default paqueteSeed