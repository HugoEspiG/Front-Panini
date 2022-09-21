import './Item.css'

const Item = (props) => {
    return (
        <div>
            <div className="card tam">
                <img src={props.children.img} className="card-img itemImg" alt="" />
                <div className="card-img-overlay content">
                    <div className="center">{props.children.nombre}</div>
                </div>
            </div>
        </div>
    );
};

export default Item;