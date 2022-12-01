import Data from "../components/Datas/Data3"

export class User {

    // Metodos para cuando este server backend


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

    // PUT(cambiar datos)
    // DELETE(eliminar datos)

    static getItemsTot(equipo){
            return fetch(`http://localhost:8085/api/Mona/all`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    bodyType: 'json'
                })
    }

    static getItems(equipo) {

        //Para GET(pedir datos)
        // return fetch('http://localhost:8080/panini/NewServlet',
        //     {
        //         method: 'GET',
        //         equipo:equipo,
        //         headers: {
        //             'Content-type': 'aplication/json',
        //         }
        //     }) 


        var ItemsCategory
        if (equipo) {
            ItemsCategory = Data.monas.filter(function (elemento) { return elemento.equipo === equipo })
        } else {
            ItemsCategory = Data.monas
        }
        return ItemsCategory
    }

    static getItem(id) {
        let itemDeseado = Data.find(elemento => elemento.id === id)
        return itemDeseado
    }
}