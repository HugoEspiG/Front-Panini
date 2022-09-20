import React from 'react';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/Items/ItemListContainer';

const Equipos = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <ItemListContainer/>
            </div>
        </div>
    );
};

export default Equipos;