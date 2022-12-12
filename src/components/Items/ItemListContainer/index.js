import React,{useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { User } from "../../../api/User";
import { UserContext } from "../../../context/UserContext";

const ItemListContainer = () => {
    const equipos = ["ALEMANIA","AUSTRALIA","BRASIL","BELGICA","CAMERUN","CANADA","COSTA RICA","CROACIA","DINAMARCA","ESPAÑA","FRANCIA","JAPON","MARRUECOS","SERBIA","SUIZA","TUNEZ"]
    const {userData} = useContext(UserContext)
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
            const resp = userData.monas
            const respTot = await User.getItemsTot(equipo);
            const jsonParsedTot = await respTot.json()
            setData(resp)
            setDataTot(jsonParsedTot);
        }
        loadData();
    }, [equipo])

    useEffect(() => {
        cargar()
    }, [pos])

    return (
        <div>
            {console.log(data)}
            {
                    <ItemList data={data} dataTot={dataTot} />
            }
            <button onClick={() => { pos > 0 ? setPos(pos - 1) : setPos(pos) }} className='btn btn-outline-dark btn-sm border bi bi-arrow-left-circle-fill'></button>
            <button onClick={() => { pos < equipos.length - 1 ? setPos(pos + 1) : setPos(pos) }} className='btn btn-outline-dark btn-sm border bi bi-arrow-right-circle-fill'> </button>
        </div>
    );
};

export default ItemListContainer;