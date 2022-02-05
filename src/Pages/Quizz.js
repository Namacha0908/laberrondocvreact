import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import '../sass/pages/_quizz.scss';
import QuizzData from "../data/QuizzData"
import CardQuizz from "../Components/CardQuizz";
import {useParams} from "react-router-dom";



const Quizz = () => {
    
    const quizzs = QuizzData.getDATAS();

    
    return ( 
        <section id="quizz">
            <Nav></Nav>
            <div>
                <h1>Quelques Quizz !</h1>
                  {
                            quizzs.map((data, index) => (
                            <div key={index} class="quizz">
                                <CardQuizz
                                    title={data.title}
                                    id={data.id}
                                />
                            </div>
                            ))
                        }
            </div>            
    <Footer></Footer>
        </section>
    );
}
 
export default Quizz;