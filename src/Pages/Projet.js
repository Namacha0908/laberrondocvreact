import '../sass/pages/_projet.scss';
import Nav from "../Components/Nav";
import Project from "../Components/Project";
import Projet1 from "../img/1.jpg";
import Projet2 from "../img/2.jpg";
import Projet3 from "../img/3.jpg";
import Projet4 from "../img/4.jpg";
import Projet5 from "../img/5.jpg";
import Projet6 from "../img/6.jpg";
import Projet7 from "../img/7.jpg";


const Projet = () => {

   const ProjetMap = [{
      nom: 'Assistant chef de projet',
      description: 'SpaceX',
      url: '/',
      image: Projet1
   },
   {
      nom: 'Chef de projet',
      description: 'Apple',
      url: '/',
      image: Projet2
   },
   {
      nom: 'Chef de projet',
      description: 'Apple',
      url: '/',
      image: Projet3
   },
   {
      nom: 'Chef de projet',
      description: 'KFC',
      url: '/',
      image: Projet4
   },
   {
      nom: 'Coiffeur de chef de projet',
      description: 'AlHairLibre',
      url: '/',
      image: Projet5
   },
   {
      nom: 'Chef de projet',
      description: "Cité de l'Espace",
      url: '/',
      image: Projet6
   },
   {
      nom: 'Stagiaire chef de projet',
      description: 'Dreamliner',
      url: 'https://todo.dreamliner.fr/',
      image: Projet7
   }]


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
        </section>
     );
}
 
export default Projet;