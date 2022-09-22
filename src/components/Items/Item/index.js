import './Item.css';


const Item = (props) => {
    return (
        <div>
            <div className="card tam">
                <button type="button" className="border border-0 border-light bg-transparent border-opacity-1">
                    <img src={props.children.img} className="card-img itemImg" alt="" />
                    <div className="card-img-overlay content">
                        <div className="center">{props.children.nombre}</div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Item;