import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import "./User.css"

const User = () => {
  const { userData } = useContext(UserContext)
  const navigateFn = useNavigate();
  console.log(userData)
  return (
    <div className='estilos'>
      <div className='row g-0 tam-user'>
        <div className="col-6 col-md-4">
          <img src='https://static.vecteezy.com/system/resources/previews/003/465/919/non_2x/awesome-smoking-monkey-with-glasses-logo-mascot-vector.jpg' className='img-tam-user rounded float-start' alt=''></img>
        </div>
        <div className="col-6 col-md-6 estilo-nombre">
          <h2 className='estilo-nombre'>{userData.name}</h2>
          <div>
            <div className="btn-group estilo-nombre">
              <button type="button" className="btn btn-outline-dark btn-lg border border-end-0">Mis laminas</button>
              <button type="button" className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split border border-start-0" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                {userData.monas ? userData.monas.map((cerv, i) => <li key={i}>{cerv.n_lamina}</li>) : <li></li>}
              </ul>
            </div>
            <div className="btn-group estilo-nombre">
              <button type="button" onClick={()=>{navigateFn('/open')}} className="btn btn-outline-dark btn-lg border bi bi-plus-square-fill"></button>
            </div>
            <div className="btn-group estilo-nombre">
              <button type="button" onClick={()=>{navigateFn('/change')}} className="btn btn-outline-dark btn-lg border bi bi-arrow-left-right"></button>
            </div>
          </div>
          <div>
            <div className="btn-group estilo-nombre">
              <button type="button" className="btn btn-outline-dark btn-lg border border-end-0">Mis amigos</button>
              <button type="button" className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split border border-start-0" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                {userData.amigos ? userData.amigos.map(cerv => <li><NavLink to={`/chat/${cerv.name}`}>{cerv.name}</NavLink></li>) : <li></li>}
              </ul>
            </div>
            <div className="btn-group estilo-nombre">
              <button type="button" onClick={()=>{navigateFn('/addFriends')}} className="btn btn-outline-dark btn-lg border bi bi-plus-square-fill"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;