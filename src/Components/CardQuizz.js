import {Link} from "react-router-dom"

const CardQuizz = ({title, id}) => {
    return ( 
        <div>
            <Link to={`/quizz/${id}`}><h2>{title}</h2></Link>
        </div>
     );
}

export default CardQuizz;