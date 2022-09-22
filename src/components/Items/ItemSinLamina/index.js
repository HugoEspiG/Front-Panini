import React from 'react';
import './ItemSinLamina.css'

const ItemSinLamina = (props) => {
    return (
        <div>
            <div className="tamIsL card">
                <div className="card-body centerIS">
                    <h5 className="card-title">{props.data.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.nombre}</h6>
                </div>
            </div>
        </div>
    );
};

export default ItemSinLamina;