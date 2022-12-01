
import Data from "../components/Datas/Data3";

export class envioDatos {

    static Register(data) {
        //        Para Post(enviar datos)
        // console.log(data)
        const user = {
            lastName: data.apellido,
            name: data.nombre,
            mail: data.email,
            password: data.password,
            idClient: generateUUID()
        }

        function generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }

        // console.log(user)
        return fetch('http://localhost:8085/api/User/save',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
                bodyType: 'json'
            });
    }

    static Login(data) {
        console.log(data)
        fetch('http://localhost:8085/api/User/login',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: {
                    mail: data.email,
                    password: data.password,
                },
                bodyType: 'json'
            })
        // let user
        // if (Data.usuario===data.email&&Data.pwd===data.password) {
        //     user = Data
        // } else {
        //     user = false
        // }
        // return user
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

    static actualizarAmigos(data) {
        Data.push(data)
    }

    static enviarMsg(msg, friend) {

    }


}