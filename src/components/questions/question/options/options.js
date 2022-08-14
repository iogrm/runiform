import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './options.css';
import Option from './option/option';
const Options=(props)=>{

    const[answer,setAnswer]=useState(0);

    const[aisActive,setaActive]=useState('disactive');
    const[bisActive,setbActive]=useState('disactive');
    const[cisActive,setcActive]=useState('disactive');
    const[disActive,setdActive]=useState('disactive');
    const[eisActive,seteActive]=useState('disactive');
    const[fisActive,setfActive]=useState('disactive');
    const[gisActive,setgActive]=useState('disactive');

    const aoptionHandler=()=>{
        setaActive('active')
        setbActive('disactive')
        setcActive('disactive')
        setdActive('disactive')
        seteActive('disactive')
        setfActive('disactive')
        setgActive('disactive')

        setAnswer(1)
        props.answerHandler(props.questionId,1)
    }
    
    const boptionHandler=()=>{
        setaActive('disactive')
        setbActive('active')
        setcActive('disactive')
        setdActive('disactive')
        seteActive('disactive')
        setfActive('disactive')
        setgActive('disactive')

        setAnswer(2)
        props.answerHandler(props.questionId,2)
    }
    
    const coptionHandler=()=>{
        setaActive('disactive')
        setbActive('disactive')
        setcActive('active')
        setdActive('disactive')
        seteActive('disactive')
        setfActive('disactive')
        setgActive('disactive')

        setAnswer(3)
        props.answerHandler(props.questionId,3)
    }
    
    const doptionHandler=()=>{
        setaActive('disactive')
        setbActive('disactive')
        setcActive('disactive')
        setdActive('active')
        seteActive('disactive')
        setfActive('disactive')
        setgActive('disactive')

        setAnswer(4)
        props.answerHandler(props.questionId,4)
    }
    
    const eoptionHandler=()=>{
        setaActive('disactive')
        setbActive('disactive')
        setcActive('disactive')
        setdActive('disactive')
        seteActive('active')
        setfActive('disactive')
        setgActive('disactive')

        setAnswer(5)
        props.answerHandler(props.questionId,5)
    }
    
    const foptionHandler=()=>{
        setaActive('disactive')
        setbActive('disactive')
        setcActive('disactive')
        setdActive('disactive')
        seteActive('disactive')
        setfActive('active')
        setgActive('disactive')

        setAnswer(6)
        props.answerHandler(props.questionId,6)
    }
    
    const goptionHandler=()=>{
        setaActive('disactive')
        setbActive('disactive')
        setcActive('disactive')
        setdActive('disactive')
        seteActive('disactive')
        setfActive('disactive')
        setgActive('active')

        setAnswer(7)
        props.answerHandler(props.questionId,7)
    }
    
    
    return(
        <div className="options">
            <Option optType="agree" optSize="max" isOptActive = {aisActive} clicked={aoptionHandler} />
            <Option optType="agree" optSize="med" isOptActive = {bisActive} clicked={boptionHandler} />
            <Option optType="agree" optSize="min" isOptActive = {cisActive} clicked={coptionHandler} />
            <Option optType="neutral" optSize="" isOptActive = {disActive} clicked={doptionHandler} />
            <Option optType="disagree" optSize="min" isOptActive = {eisActive} clicked={eoptionHandler} />
            <Option optType="disagree" optSize="med" isOptActive = {fisActive} clicked={foptionHandler} />
            <Option optType="disagree" optSize="max" isOptActive = {gisActive} clicked={goptionHandler} />
        </div>
    )
}
export default React.memo(Options);