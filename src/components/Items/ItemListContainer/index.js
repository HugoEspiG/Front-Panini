import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { laminasTot } from "../../../api/laminasTot";
import { laminasUser } from "../../../api/laminasUser";

const ItemListContainer = () => {
    const equipos=["Argentina","Portugal"]
    const [data, setData] = useState([])
    const [dataTot, setDataTot] = useState([])
    const [pos, setPos] = useState(0);
    const { equipo } = useParams();
    const navigateFn = useNavigate();

    const loadPrev = () => {
        setPos(pos-1)
        cargar()
        // pos>-1?
        // setPos(pos-1):
        // console.log("No hay mas equipos")
        // navigateFn(`/${equipos[pos]}`)
    }
    const loadNext = () => {
        setPos(pos+1)
        cargar()
        // pos<equipos.length?
        // setPos(pos+1):
        // console.log("No hay mas equipos")
        // navigateFn(`/${equipos[pos]}`)
    }
    const cargar = ()=>{
        console.log(pos)
        navigateFn(`/${equipos[pos]}`)
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
            <button onClick={loadPrev}>Izquie</button>
            <button onClick={loadNext}> Dere</button>
            {console.log(equipos[0])}
        </div>
    );
};

export default ItemListContainer;