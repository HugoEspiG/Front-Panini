import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import "./User.css"

const User = () => {
  const { userData } = useContext(UserContext)
  return (
    <div className='estilos'>
      <div className='row g-0 tam-user'>
        <div className="col-6 col-md-4">
          <img src={userData.img} className='img-tam-user rounded float-start' alt=''></img>
        </div>
        <div className="col-6 col-md-6 estilo-nombre">
          <h2 className='estilo-nombre'>{userData.nombre}</h2>
          <div className="btn-group estilo-nombre">
            <button type="button" className="btn btn-outline-dark btn-lg border border-end-0">Mis laminas</button>
            <button type="button" className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split border border-start-0" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              {userData.monas.map(cerv => <li>{cerv.n_lamina}</li>)}
            </ul>
          </div>
          <div className="btn-group estilo-nombre">
            <button type="button" className="btn btn-outline-dark btn-lg border border-end-0">Mis amigos</button>
            <button type="button" className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split border border-start-0" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              {userData.amigos.map(cerv => <li><NavLink to={`/chat/${cerv}`}>{cerv}</NavLink></li>)}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default User;