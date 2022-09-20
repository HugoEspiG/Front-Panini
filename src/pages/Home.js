import NavBar from "../components/NavBar";

export default function Home(){

    return(
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <h2>Este es el Home</h2>
            </div>
        </div>
    )
}