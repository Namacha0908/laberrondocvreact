import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import '../sass/pages/_quizz.scss';
import QuizzData from "../data/QuizzData"
import CardQuizz from "../Components/CardQuizz";
import {useParams} from "react-router-dom";
import {useEffect , useState} from "react";
import SingleQuestion from "../Components/SingleQuestion";


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
    }
    return ( 
        <section id="quizz">
            <Nav></Nav>
            {quizz ?
            <div>
                <h1>Quizz numero {id}</h1>
                <SingleQuestion question={quizz.questions[currentQuestion]} next={next}></SingleQuestion>

            </div> : null}            
            <Footer></Footer>
        </section>
    );
}
 
export default SingleQuizz;
