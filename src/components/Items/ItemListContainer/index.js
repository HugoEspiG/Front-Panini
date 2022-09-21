import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { laminasTot } from "../../../api/laminasTot";
import { laminasUser } from "../../../api/laminasUser";

const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [dataTot, setDataTot] = useState([])
    const { equipo } = useParams();
    const navigateFn = useNavigate();

    const loadPrev = () => {
        navigateFn(`/${data.previus}`)
    }
    const loadNext = () => {
        navigateFn(`/${equipo}`)
    }

    useEffect(() => {
        async function loadData() {

            const resp = await laminasUser.getItems(equipo);
            const respTot = await laminasTot.getItems(equipo);
            // const jsonParsed = await response.json()
            // setData(jsonParsed.data)
            setData(resp);
            setDataTot(respTot);
        }
        loadData();
    }, [equipo])

    return (
        <div>
            {
                dataTot.map(cerv =>
                    <ItemList key={cerv.id} data={data} dataTot={cerv.jugadores} />
                )
            }

            <button></button>
            <button></button>
        </div>
    );
};

export default ItemListContainer;