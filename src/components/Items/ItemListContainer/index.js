import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { laminasTot } from "../../../api/laminasTot";
import { User } from "../../../api/User";

const ItemListContainer = () => {
    const equipos = ["Argentina", "Portugal", "España"]
    const [data, setData] = useState([])
    const [dataTot, setDataTot] = useState([])
    const [pos, setPos] = useState(0);
    const { equipo } = useParams();
    const navigateFn = useNavigate();
    const cargar = () => {
        navigateFn(`/${equipos[pos]}`)
    }
    useEffect(() => {
        async function loadData() {

            const resp = await User.getItems(equipo);
            const respTot = await laminasTot.getItems(equipo);
            console.log(resp)
//            const jsonParsed = await resp.json()
             setData(resp)
//            console.log(jsonParsed)
            setDataTot(respTot);
        }
        loadData();
    }, [equipo])

    useEffect(() => {
        cargar()
    }, [pos])

    return (
        <div>
            {
                dataTot.map(cerv =>
                    <ItemList key={cerv.id} data={data} dataTot={cerv.jugadores} />
                )
            }
            <button onClick={() => { pos > 0 ? setPos(pos - 1) : setPos(pos) }}>Izquie</button>
            <button onClick={() => { pos < equipos.length - 1 ? setPos(pos + 1) : setPos(pos) }}> Dere</button>
        </div>
    );
};

export default ItemListContainer;