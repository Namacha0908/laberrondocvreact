import '../sass/pages/_projet.scss';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Project from "../Components/Project";
import ProjetMap from "../data/ProjetMap";


const Projet = () => {

    return ( 
        <section id="projets">
           <Nav></Nav>
            <section class="projects">
                <div class="contain-projects">
                     {
                            ProjetMap.map((data, index) => (
                            <div key={index} class="project">
                                <Project
                                    nom={data.nom}
                                    description={data.description}
                                    url={data.url}
                                    image={data.image}
                                />
                            </div>
                            ))
                        }
                </div>
            </section>
            <Footer></Footer>
        </section>
     );
}
 
export default Projet;