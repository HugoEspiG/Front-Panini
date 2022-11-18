import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { useForm } from "react-hook-form"
import "./Chat.css"

const Chat = () => {

    const { userData } = useContext(UserContext)
    const [mensaje, setMensaje] = useState({type: 0, text :""})
    const [mensajes, setMensajes] = useState([])
    const { register, handleSubmit } = useForm()
    const navigateFn = useNavigate();

    useEffect(() => {
        setMensajes([...mensajes, mensaje])
    }, [mensaje])


    const customSubmit = (data) => {
        setMensaje(
            {
                type: 1,
                text: data
            })
    }

    return (
        <div>
            <div className="row g-0 est">
                <div className="col-sm-6 col-md-2">
                    <img src={userData.img} alt='' className='img-tam-user rounded float-start'></img>
                </div>
                <div className="col-6 col-md-8 border border-dark">
                    {mensajes.map((e, i) => (
                        <div className='prueba' align='end'>
                            {console.log(e.text.text)}
                            <label key={i} className="text-bg-primary rounded">{e.text.text}</label>
                        </div>
                    )
                    )}
                </div>
            </div>

            <div className="row g-0 ">
                <div className="col-sm-6 col-md-1">
                    <img src={userData.img} alt='' className='img-tam-user rounded float-start'></img>
                </div>
                <div className="col-sm-6 col-md-8">
                    <form onSubmit={handleSubmit(customSubmit)}>
                        <div className="input-group mb-3">
                            <input
                                type='text'
                                {...register('text')}
                                placeholder=" "
                                autoComplete="off"
                                className='form-control'
                            ></input>
                            <button className="btn btn-dark " type="submit">enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;