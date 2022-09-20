import './Item.css'

const Item = (props) => {
    return (
        <div>
            <div className="card tam">
                <img src={props.img} className="card-img itemImg" alt="" />
                <div className="card-img-overlay content">
                    <div className="center">{props.nombre}</div>
                </div>
            </div>
        </div>
    );
};

export default Item;