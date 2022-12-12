import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { envioDatos } from '../../../api/envioDatos';
import { User } from '../../../api/User';
import { UserContext } from '../../../context/UserContext';
import './Monas.css'

const Monas = () => {
    const [flag, setFlag] = useState({});
    const { userData, addMona } = useContext(UserContext);
    const navigateFn = useNavigate();
    const [click,setClick]=useState(false)

    const open = () => {
        async function abrir() {
                var num=Math.random()
                num<=0.75?num=Math.floor(Math.random() * (321 - 121) + 121):num=Math.floor(Math.random() * (588- 501) + 501)
                const resp = await User.getItem(num)
                const parseJson = await resp.json()
                addMona(parseJson)
                setFlag(parseJson)
        }
    abrir()
    }
    // useEffect(open ,[click])
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
            <div className='estilos'>
                <div className='row g-0 tam-user'>
                    <div className="col-6 col-md-6">
                        <div className="card tam">
                            <button type="button" onClick={open} className="border border-0 border-light bg-transparent border-opacity-1">
                                <img src='https://pandaenlinea.com/wp-content/uploads/2022/08/SOBRE-1.png' className="card-img itemImg" alt="" />
                                <div className="card-img-overlay content">
                                    <div className="center">Abrir Sobre</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    {flag ? (
                        <div className="col-6 col-md-6">
                            <div className="card tam">
                                <button type="button" className="border border-0 border-light bg-transparent border-opacity-1">
                                    <img src={flag.image} className="card-img itemImg" alt="" />
                                    <div className="card-img-overlay content">
                                        <div className="center">{flag.name}</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="col-6 col-md-6">
                            <div className="tam card">
                                <div className="card-body itemImg ">
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Monas;