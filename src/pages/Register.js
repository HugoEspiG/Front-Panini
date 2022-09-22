import React from 'react';
import NavBar from '../components/NavBar';
import Registro from '../components/Usuario/Register';

const Register = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <Registro></Registro>
            </div>
        </div>    
        );
};

export default Register;