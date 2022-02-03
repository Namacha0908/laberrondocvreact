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
      nom: 'Chef de projet',
      description: 'SpaceX',
      url: 'Tesla',
      image: Projet1
   },
   {
      nom: 'Chef de projet',
      description: 'SpaceX',
      url: 'Tesla',
      image: Projet2
   },
   {
      nom: 'Chef de projet',
      description: 'SpaceX',
      url: 'Tesla',
      image: Projet3
   },
   {
      nom: 'Chef de projet',
      description: 'SpaceX',
      url: 'Tesla',
      image: Projet4
   },
   {
      nom: 'Chef de projet',
      description: 'SpaceX',
      url: 'Tesla',
      image: Projet5
   },
   {
      nom: 'Chef de projet',
      description: 'SpaceX',
      url: 'Tesla',
      image: Projet6
   },
   {
      nom: 'Chef de projet',
      description: 'SpaceX',
      url: 'Tesla',
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