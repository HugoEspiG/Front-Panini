import Item from "../Item";
import ItemSinLamina from "../ItemSinLamina";
import React from "react";

const ItemList = (props) => {

    return (
        <div className="row">
            {console.log(props.data)}
            {
                props.dataTot.map(jug =>
                    < div key={jug.idMessage} className="col" align="center" >
                        {console.log(jug)}
                        {   props.data.filter(elemento => elemento.idMessage === jug.idMessage).length?
                            <Item>
                                {props.data.find(elemento=>elemento.idMessage===jug.idMessage)}
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