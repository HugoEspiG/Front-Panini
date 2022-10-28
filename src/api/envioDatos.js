import Data from "../components/Datas/Data3";

export class envioDatos {

    static Register(data) {
        // Para Post(enviar datos)
        // fetch('url',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'aplication.json',

        //         }
        //         body:JSON.stringify({

        //         })
        //     })

        Data.push(data)
    }

    static Login(data) {
        let user
        if (Data.usuario===data.email&&Data.pwd===data.password) {
            user = Data
        } else {
            user = false
        }
        return user

    }

    static actualizarMonas(data) {
        // Para PUT(enviar datos)
        // fetch('url',
        //     {
        //         method: 'PUT',
        //         headers: {
        //             'Content-type': 'aplication.json',

        //         }
        //         body:JSON.stringify({

        //         })
        //     })
        Data.monas.push(data)
    }

    static actualizarAmigos(data){
        Data.push(data)
    }

    static enviarMsg(msg,friend){

    }
}