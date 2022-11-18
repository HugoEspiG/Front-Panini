import { NavLink } from "react-router-dom";
import React from "react";

export default function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-brand" >Album</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/Home"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Argentina"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Album</NavLink>
                            </li>
                        </ul>
                        <div className="nav-item">
                            <NavLink to={"/Home"} className="bi bi-person-circle text-white"></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}