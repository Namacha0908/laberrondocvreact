import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import '../sass/pages/_home.scss';

const Home = () => {
    return ( 
        <section id="home">
            <Nav></Nav>
            <div class="accueil">
                <div class="card-name">
                    <h1>Théo Laberrondo</h1>
                    <h2>IIM A3 Développement Web</h2>
                </div>
            </div>
        </section>
    );
}
 
export default Home;