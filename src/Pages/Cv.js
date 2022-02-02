import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import '../sass/pages/_cv.scss';



const Cv = () => {
    return ( 
        <section id="cv">
             <Nav></Nav>
            <section class="photo">
                <div>
                    <div class="profil-picture">
                            <span class="image-rond image-ronde-bg"></span>
                    </div> 
                </div>
            </section>
            <section id="some-infos">
                <div class="infos">
                <h1>Théo Laberrondo</h1>
                <h2>tl@gmail.fr</h2>
                <h3>12 Av. Léonard de Vinci, 92400 Courbevoie</h3>
                <h4>06 06 06 06 06</h4>
            </div>
            </section>
        </section>
     );
}
 
export default Cv;