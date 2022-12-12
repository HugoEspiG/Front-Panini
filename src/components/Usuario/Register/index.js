import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "./Register.css"
import { envioDatos } from '../../../api/envioDatos';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigateFn = useNavigate();

    const customSubmit = (data) => {
        if (data.email === data.email2) {
            async function datos() {
                try {
                    const resp = await envioDatos.Register(data)
                    const parseJson = await resp.json();
                    console.log(parseJson);
                    if (resp.ok) {
                        alert("Registrado con exito")
                        navigateFn('/')
                    } else {
                        alert("Fallo en el registro")
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            datos();
        } else {
            alert("El email no coinciden con la confirmacion")
        }
    }

    return (
        <>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0l2XCONKBWIAkcc6P2AmT2li1FyGNJBUMLQ&usqp=CAU' className='rounded mx-auto d-block sizeImg rounded-pill' alt=""></img>
            <form onSubmit={handleSubmit(customSubmit)} className='row '>
                <div className="form-floating  col-md-4 div-m">
                    <input
                        type='text'
                        {...register('nombre', { required: true })}
                        placeholder="Nombre"
                        className='form-control'
                    ></input>
                    {errors.nombre && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">Nombre</label>
                </div>
                <div className="form-floating col-md-4 div-m">
                    <input
                        type='text'
                        {...register('apellido', { required: true })}
                        placeholder="Apellido"
                        autoComplete="on"
                        className='form-control'
                    ></input>
                    {errors.apellido && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">Apellido</label>
                </div>
                <div className="col-md-6 form-floating div-m">
                    <input
                        type='email'
                        {...register('email', { required: true })}
                        placeholder="@email.com"
                        autoComplete="on"
                        className='form-control'
                    ></input>
                    {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">@email.com</label>
                </div>
                <div className="col-md-6 form-floating div-m">
                    <input
                        type='email'
                        {...register('email2', { required: true })}
                        placeholder="confirmacion email"
                        autoComplete="on"
                        className='form-control'
                    ></input>
                    {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">confirmacion email</label>
                </div>
                <div className="col-md-6 form-floating div-m">
                    <input
                        type='password'
                        {...register('password', { required: true })}
                        placeholder="contraseña"
                        autoComplete="on"
                        className='form-control'
                    ></input>
                    {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">contraseña</label>
                </div>
                <div align="col-12 div-m">
                    <button className="btn btn-dark" type="submit">Registrarse</button>
                </div>
            </form>

        </>
    );
};

export default Register;