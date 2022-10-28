import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { envioDatos } from "../../../api/envioDatos";
import "./Login.css"
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigateFn = useNavigate();
    const { addUser } = useContext(UserContext)

    const customSubmit = (data) => {
        const userInfo=envioDatos.Login(data)
        if (userInfo) {
            addUser(userInfo)
            navigateFn("/Home")
        }
        else {
            alert("Usuario o email incorrectos")
        }
    }
    return (
        <>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0l2XCONKBWIAkcc6P2AmT2li1FyGNJBUMLQ&usqp=CAU' className='rounded mx-auto d-block sizeImg rounded-pill' alt=""></img>
            <form onSubmit={handleSubmit(customSubmit)}>
                <div className="col-md-6 form-floating sizing">
                    <input
                        type='email'
                        {...register('email', { required: true })}
                        placeholder="Usuario"
                        autoComplete="on"
                        className='form-control'
                    ></input>
                    {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">Usuario</label>
                </div>
                <div className="col-md-6 form-floating sizing">
                    <input
                        type='password'
                        {...register('password', { required: true })}
                        placeholder="contraseña"
                        autoComplete="off"
                        className='form-control'
                    ></input>
                    {errors.password && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">contraseña</label>
                </div>
                <div align="col-12">
                    <button className="btn btn-dark" type="submit">Loguearse</button>
                </div>
                <p>
                    No estas registrado? <NavLink to='/register'>Registrate</NavLink>
                </p>
            </form>
        </>
    )
}