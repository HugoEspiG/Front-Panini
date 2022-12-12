import React from 'react';
import Monas from '../components/Busquedas/Monas';
import NavBar from '../components/NavBar';

const AbrirSobres = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <Monas></Monas>
            </div>
        </div>    
        );
};

export default AbrirSobres;