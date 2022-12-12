import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { envioDatos } from '../../../api/envioDatos';
import { User } from '../../../api/User';
import { UserContext } from '../../../context/UserContext';
import './Amigos.css'


const amigos = () => {
    const [data, setData] = useState([]);
    const { userData, addFriend } = useContext(UserContext);
    const navigateFn = useNavigate();
    useEffect(() => {
        async function cargar() {
            try {
                const resp = await User.getUsers()
                const parseJson = await resp.json();
                console.log(parseJson)
                setData(parseJson)
            } catch (error) {
                console.log(error);
            }
        }
        cargar();
    }, [])

    const save= ()=>{
    async function guardar(){
        try {
            const resp = await envioDatos.actualizarAmigos(userData)
            const parseJson = await resp.json();
            console.log(parseJson);
            navigateFn('/Home')
        } catch (error) {
            console.log(error);
        }
    }
    guardar()
    }
    return (
        <div className='position-relative'>
            <div className='position-absolute top-0 start-0'>
                <button type="button" onClick={save} className="btn btn-outline-dark btn-sm border bi bi-arrow-left-square-fill"></button>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Usuario</th>
                            <th scope='col'>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cerv, i) => {
                            if (cerv.mail === userData.mail) {
                                return (<></>)
                            } else {
                                return (
                                    <tr key={i}>
                                        <td>{cerv.name}</td>
                                        <td>{cerv.mail}</td>
                                        <td><button type="button" onClick={() => { addFriend(cerv) ? alert("Añadido con exito") : alert("Ya tienes este amigo") }} className="btn btn-outline-dark btn-sm border bi bi-plus-square-fill"></button></td>
                                    </tr>
                                )
                            }
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default amigos;