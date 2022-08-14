import React from 'react';
import './option.css';
import PropTypes from 'prop-types';
const Option =(props)=>{
    let classes=["option "];
    switch(props.optType){
        case "agree":
            classes.push("agree");
            break;
        case "disagree":
            classes.push("disagree");
            break;
        case "neutral":
            classes.push("neutral");
            break;
        default:
            break;
    }
    
    switch(props.optSize){
        case "max":
            classes.push("max");
            break;
        case "med":
            classes.push("med");
            break;
        case "min":
            classes.push("min");
            break;
        default:
            break;
    }

    switch(props.isOptActive){
        case "active":
            classes.push("active");
            break;
        case "disactive":
            classes.push("disactive");
            break;
        default:
            break;
    }

    return(
        <div className={classes.join(' ')} onClick={props.clicked}>
        </div>
    )
}
export default React.memo(Option);
Option.propTypes={
    clicked:PropTypes.func.isRequired,
    optType:PropTypes.string,
    optSize:PropTypes.string
}
Option.defaultProps={
    optType:'neutral'
}