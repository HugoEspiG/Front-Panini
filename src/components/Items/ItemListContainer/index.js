
import Data from "../../Data"
import { useState, useEffect } from "react"
import ItemList from "../ItemList";


const ItemListContainer = () => {
    const getFetch = new Promise((res, rej) => {
        if (Data) {
            res(Data)
        } else {
            rej(console.log("No hay datos"))
        }
    })

    const [data, setData] = useState([])

    useEffect(() => {
        getFetch.then((resp) => setData(resp))
            .catch(err => console.log(err))
            .finally(() => console.log("datos traidos"))
    }, [])

    return (
        <div>
            <ItemList data={data}/>
        </div>
    );
};

export default ItemListContainer;