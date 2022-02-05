import {Link} from "react-router-dom"
import '../sass/pages/_quizz.scss';

const CardQuizz = ({title, id}) => {
    return ( 
        <div id="CardQuizz">
            <Link to={`/quizz/${id}`}><h2>{title}</h2></Link>
        </div>
     );
}

export default CardQuizz;