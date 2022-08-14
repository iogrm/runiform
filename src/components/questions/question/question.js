import React from 'react';
import Options from './options/options';
import './question.css';
const Question=(props)=>{
    return(
        <div className="question">
            <div className="statement">
                <span>  {props.children}</span>
            </div>
            <div className="decision">
                <div className="caption agree">موافقم</div>
                <Options 
                questionId={props.questionId}
                answerHandler={ props.answerHandler}/>
                <div className="caption disagree">مخالفم</div>
            </div>
            <div className="decision mobile">
                <div className="caption agree">موافقم</div>
                <div className="caption disagree">مخالفم</div>
            </div>
        </div>
    )
}
export default React.memo(Question);