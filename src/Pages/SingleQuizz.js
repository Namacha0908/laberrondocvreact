import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import '../sass/pages/_quizz.scss';
import QuizzData from "../data/QuizzData"
import {useParams} from "react-router-dom";
import {useEffect , useState} from "react";
import SingleQuestion from "../Components/SingleQuestion";
import {Link} from "react-router-dom"


const SingleQuizz = () => {

    const{id} = useParams();
    const [quizz, setQuizz] = useState(null);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect (() => {
        setQuizz(QuizzData.getDATA(id));
    });
    const next = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        console.log(currentQuestion)
    }
    return ( 
        <section id="singleQuizz">
            <Nav></Nav>
            {quizz ?
            <div class="single-quizz">
                <h1>Quizz numero {id}</h1>
                { currentQuestion < quizz.questions.length ?
                            <SingleQuestion question={quizz.questions[currentQuestion]} next={next}></SingleQuestion>
                : <div> 
                    <p class="result">Résultats {score} / 10</p>
                     <Link to={`/quizz`}><h2>Recommencer !</h2></Link>
                     <Link to={`/`}><h2>Revenir à l'accueil !</h2></Link>
                </div>}
            </div> : null}            
            <Footer></Footer>
        </section>
    );
}
 
export default SingleQuizz;