const SingleQuestion = ({question, next}) => {
    const verify = (answer) => {
        if (answer == question.correct)
        {
            next(true)
        }
        else {
            next(false)
        }
    }
    return ( 
        <section id="single-question">
            <h2>{question.title}</h2>
               {
                    question.answers.map((answer, index) => (
                    <div key={index} class="diplome">
                    <p onClick={() => verify(answer)}>{answer}</p>
                            </div>
                            ))
                        }
        </section>
    );
}
 
export default SingleQuestion;