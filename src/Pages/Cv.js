import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Experience from "../Components/Experience";
import Formation from "../Components/Formation";
import Skill from "../Components/Skill";
import Diplome from "../Components/Diplome";
import ExperienceMap from "../data/ExperienceMap";
import FormationMap from "../data/FormationMap";
import SkillMap from "../data/SkillMap";
import DiplomeMap from "../data/DiplomeMap";
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
                    <h1>Contactez-moi !</h1>
                    <h2>Théo Laberrondo</h2>
                    <h3>tl@gmail.fr</h3>
                    <h4>12 Av. Léonard de Vinci, 92400 Courbevoie</h4>
                    <h5>06 06 06 06 06</h5>
            </div>
            </section>
            <section id="about-me">
                <div class="title">
                    <h2>A propos de moi !</h2>
                </div>
                <div class="content-about">
                    <p>Je suis actuellement étudiant en 3éme année à l'IIM dans l'axe développement web. 
                        J'ai aussi réalisé des projets avec l'école 42. 
                        Développeur passionné, j'ai récemment découvert le rôle de chef de projet, ce qui m'a beaucoup plu. 
                        Je cherche donc un stage en tant qu'assistant de chef de projet afin de découvrir plus avant ce poste et renforcer mes compétences dans le domaine !
                        </p>
                </div>
            </section>
            <section id="experiences">
                <h2>Mes expériences !</h2>
                <div class="contain-experiences">
                    {
                            ExperienceMap.map((data, index) => (
                            <div key={index} class="experience">
                                <Experience
                                    poste={data.poste} 
                                    entreprise={data.entreprise}
                                    mission={data.entreprise}  
                                    duree={data.duree}
                                />
                            </div>
                            ))
                        }
                </div>
            </section>
            <section id="formations">
                <h2>Ma formation !</h2>
                <div class="contain-formations">
                    {
                            FormationMap.map((data, index) => (
                            <div key={index} class="formation">
                                <Formation
                                    ecole={data.ecole} 
                                    annee={data.annee}
                                    specialite={data.specialite}  
                                />
                            </div>
                            ))
                        }
                </div>
            </section>
            <section id="skills">
                <h2>Mes skills !</h2>
                <div class="contain-skills">
                     {
                            SkillMap.map((data, index) => (
                            <div key={index} class="skill">
                                <Skill
                                    nom={data.nom} 
                                    niveau={data.niveau}
                                  
                                />
                            </div>
                            ))
                        }
                </div>
            </section>
            <section id="diplomes">
                <h2>Mes skills !</h2>
                <div class="contain-diplomes">
                     {
                            DiplomeMap.map((data, index) => (
                            <div key={index} class="diplome">
                                <Diplome
                                    diplome={data.diplome}
                                    annee={data.annee}
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
 
export default Cv;
// ({poste, entreprise, mission, duree}) 