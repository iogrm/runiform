import React from 'react';
import './information.css'
const Information = (props)=>{
    return(
        <div className="information_main">
            <section className="info_flexContainer">
                <span className=" info_mbti"> {props.mbti} </span>
                <div className="info_flexItem">
                    <img className="avatar" src={props.avatarSrc}/>
                </div>
                <div className="info_name">
                    <span> {props.title}  </span>
                </div>
                <div className="info_flexItem">
                    <span className="info_description"> {props.description} </span>
                </div>
            </section>
            <div className="info_pinBottom">
                <span className="info_hintText">برای سفر به کجا باید بری؟</span>
                <div className="svg_div">
                    <img className="svg_down"/>
                </div>
            </div>
        </div>
    )
}
export default Information;