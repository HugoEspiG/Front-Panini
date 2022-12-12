
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
        const user={
            mail:data.email,
            password:data.password
        }
        return fetch('http://localhost:8085/api/User/login',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(user),
                bodyType: 'json'
            })

    }

    static actualizarMonas(data) {
        fetch('http://localhost:8085/api/User/update',
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'aplication.json',
                },
                body:JSON.stringify(data),
                bodyType:'json'
            })
    }

    static actualizarAmigos(data) {
        return fetch('http://localhost:8085/api/User/update',
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(data),
            bodyType: 'json'
        })
    }

    static enviarMsg(msg, friend) {

    }


}