import React from 'react';
import NavBar from '../components/NavBar';
import Amigos from '../components/Busquedas/Amigos';

const AddFriends = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <Amigos></Amigos>
            </div>
        </div>    
        );
};

export default AddFriends;