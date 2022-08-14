import React from 'react';
import './button.css';
import PropTypes from 'prop-types';
const Button =(props)=>{
    let classes=["sp-button", "button--lg", "button--pill", "button--fixed"];
    switch(props.btnColor){
        case "amethystine":
            classes.push("button-amethystine");
            break;
        case "purple":
            classes.push("button-purple");
            break;
        default:
            break;
    }
    return(
        <button 
        className={classes.join(' ')}
        onClick= {props.clicked}>
            <span className="button__text">
                {props.children}
            </span> 
        </button>
    )
}
export default React.memo(Button);
Button.propTypes={
    children:PropTypes.string.isRequired,
    clicked:PropTypes.func,
    btnType:PropTypes.array
}