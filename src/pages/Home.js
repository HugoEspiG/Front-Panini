import NavBar from "../components/NavBar";
import User from "../components/Usuario/User";
import React from "react";

export default function Home(){

    return(
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <User/>
            </div>
        </div>
    )
}