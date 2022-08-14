import React from 'react';
import './place.css'

const Place = (props)=>{


    const place_main_style={
        backgroundImage: `url(${props.locSrc})`,
    };
    return(

        <div className="place_main" style={place_main_style}>
            <div className="backdrop"></div>
            <div className="place_detailContainer">
                <span className="place_name"> {props.name} </span>
                <p className="place_discription"> {props.description} </p>
            </div>
        </div>
    )
}
export default Place;