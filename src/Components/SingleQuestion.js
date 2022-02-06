const SingleQuestion = ({question, next}) => {
    const verify = (answer) => {
        if (answer === question.correct)
        {
            next(true)
        }
        else {
            next(false)
        }
    }
    
   const shuffleArray = (array) => {
        let new_arr = [];
        while (new_arr.length < array.length) {
            let random_item = array[Math.floor(Math.random() * (array.length))];
            if (!new_arr.includes(random_item)) { new_arr.push(random_item) }
        }
        return new_arr
    }

    question.answers = shuffleArray(question.answers)

    return ( 
        <section id="single-question">
            <h2>{question.title}</h2>
               {
                    question.answers.map((answer, index) => (
                    <div key={index} class="oneQuestion">
                    <p onClick={() => verify(answer)}>{answer}</p>
                            </div>
                            ))
                        }
        </section>
    );
}
 
export default SingleQuestion;