import { useState } from "react";
import Item from "../Item";
import ItemSinLamina from "../ItemSinLamina";

const ItemList = (props) => {

    const [cerv, setCerv] = useState({})

    return (
        <div className="row">
            {
                props.dataTot.map(jug =>
                    < div key={jug.id} className="col" align="center" >
                        {
                            props.data.filter(elemento => elemento.id === jug.id).length?
                            <Item>
                                {props.data.find(elemento=>elemento.id===jug.id)}
                            </Item>
                            :
                            <ItemSinLamina data={jug}/>
                        }
                    </div>
                )
            }
        </div >
    )
}

export default ItemList;