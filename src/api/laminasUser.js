import Data from "../components/Datas/Data"

export class laminasUser {

    // Metodos para cuando este server backend

    // Para GET(pedir datos)
    // fetch('url',
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'aplication.json',

    //         }
    //     })

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


    static getItems(equipo) {

        var ItemsCategory
        if (equipo) {
            ItemsCategory = Data.filter(function (elemento) { return elemento.equipo === equipo })
        } else {
            ItemsCategory = Data
        }
        return ItemsCategory
    }

    static getItem(id) {
        let itemDeseado = Data.find(elemento => elemento.id == id)
        return itemDeseado
    }
}