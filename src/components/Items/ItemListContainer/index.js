
import Data from "../../Data"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { backendApi } from "../../../api/backendApi";

const ItemListContainer = () => {
    const [data, setData] = useState([])
    const { equipo } = useParams();

    useEffect(() => {
        async function loadData() {

            const resp = await backendApi.getItems(equipo);
            // const jsonParsed = await response.json()
            // setData(jsonParsed.data)
            setData(resp);
        }
        loadData();
    }, [equipo])

    return (
        <div>
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;