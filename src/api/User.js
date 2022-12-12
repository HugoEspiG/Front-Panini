import Data from "../components/Datas/Data3"

export class User {


    static getItemsTot(equipo){
            return fetch(`http://localhost:8085/api/Mona/equipo/${equipo}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    bodyType: 'json'
                })
    }

    static getUser(id) {
        return fetch(`http://localhost:8085/api/User/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            bodyType: 'json'
        })

    }

    static getUsers(){
            return fetch(`http://localhost:8085/api/User/all`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    bodyType: 'json'
                })
    }


    static getItem(id) {
        return fetch(`http://localhost:8085/api/Mona/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            bodyType: 'json'
        })
    }
}