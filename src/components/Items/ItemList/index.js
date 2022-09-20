import Item from "../Item";

const ItemList = (props) => {
    return (
        <div className="row">
        {props.data.map(cerv=>
        <div key={cerv.id} className="col" align="center">
            <Item id={cerv.id} nombre={cerv.nombre} pais={cerv.pais} img={cerv.img} lamina={cerv.n_lamina}/>
        </div>)
        }
    </div>  
    );
};

export default ItemList;