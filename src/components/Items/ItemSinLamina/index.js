import React from 'react';

const ItemSinLamina = (props) => {
    return (
        <div>
            <div className="card tam">
                <img src={props.data.img} className="card-img itemImg" alt="" />
                <div className="card-img-overlay content">
                    <div className="center">{props.data.nombre}</div>
                    <div className="center">{props.data.n_lamina}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemSinLamina;