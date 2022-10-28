import React, { useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { useForm } from "react-hook-form"
import "./Chat.css"

const Chat = () => {

    const { userData } = useContext(UserContext)
    const { register, handleSubmit } = useForm()
    const navigateFn = useNavigate();

    const customSubmit = (data) => {

    }

    return (
        <div>
            <div class="row g-0 est">
                <div class="col-sm-6 col-md-2">
                    <img src={userData.img} alt='' className='img-tam-user rounded float-start'></img>
                </div>
                <div class="col-6 col-md-8 border border-dark"></div>
            </div>
            <div class="row g-0 ">
                <div class="col-sm-6 col-md-1">
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