import Item from "../Item";
import ItemSinLamina from "../ItemSinLamina";
import React from "react";

const ItemList = (props) => {

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