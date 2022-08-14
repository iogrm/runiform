import React, { useEffect } from 'react';
import Question from './question/question';
import './questions.css';
const Questions = (props) => {

    useEffect(() => {
    }, [props.questionsList])

    let questions = props.questionsList.map((question, index) =>
        <Question
            questionId={question.id}
            answerHandler={props.answerHandler} >
            {question.question}
        </Question>
    )

    return (
        <div className="test-questions comp">
            {
                questions
            }
        </div>
    )
}
export default React.memo(Questions);