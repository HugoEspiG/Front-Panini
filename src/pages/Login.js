import React from 'react';
import NavBar from '../components/NavBar';
import Login from '../components/Usuario/Login';

const login = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <Login></Login>
            </div>
        </div>    
        );
};

export default login;