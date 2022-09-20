import ItemListContainer from "../components/Items/ItemListContainer";
import NavBar from "../components/NavBar";

export default function Home(){

    return(
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <ItemListContainer/>
            </div>
        </div>
    )
}