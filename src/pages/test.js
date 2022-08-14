import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Questions from '../components/questions/questions';
import Button from '../components/UI/button/button';
import Header from '../components/UI/header/header';
import './style/action-row.css';


const Test = (props) => {
  const [questionsState, setQuestions] = useState([]);
  const [mbtiState, setMbti] = useState("xxxx");
  const [isBtnClicked, btnClicked] = useState(false);

  const [answersState, setAnswers] = useState([]);
  const getQuestions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/questions', {
        method: 'GET',
        headers: {
          'Content_Type': 'application/json'
        }
      });

      const responseData = await response.json();
      const questions = responseData.questions;
      setQuestions(questions);
    } catch (error) {
      console.log(error);
    }
  };

  const submitAnswers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/questions/answers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          answersState
        })
      });

      const responseData = await response.json();
      console.log("response: ", responseData)
      const mbti = await responseData.mbti;
      setMbti(mbti)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, [])

  const answerHandler = (id, answer) => {
    const newAnswersState = [...answersState];
    newAnswersState.push({
      'question_id': id,
      'option': answer,
    });
    setAnswers(newAnswersState);
  }

  let mbti;
  const btnClick = () => {
    btnClicked(true);
    mbti = submitAnswers()
  }

  let redirect = null;
  if (isBtnClicked && mbtiState != "xxxx") {
    props.mbtiHandler(mbtiState)
    redirect = <Navigate to={'/profile'} replace={true} />
  }

  return (
    <React.Fragment>
      {redirect}
      <div>
        <Header />
        <Questions
          answerHandler={answerHandler}
          questionsList={questionsState} />
        <div className="action-row">
          <Button clicked={btnClick} btnColor={"purple"}> نتیجه </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Test;
