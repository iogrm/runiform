import React,{useState} from 'react';
import {Route, Link, Routes, useParams, Navigate} from 'react-router-dom';

import Button from '../components/UI/button/button';
import './style/welcome.css'
const Welcome=() =>{
    
    const[toggle,setToggle] = useState(false);
    const btnClicked = ()=>{
        setToggle(true);
    }

    let redirect = null;

    if(toggle){
        redirect = <Navigate to="/test" replace={true} />
    }
    return (
      <React.Fragment>
        {redirect}
        <div className="welcome">
            <h3>  دوست داری بدونی کجا باید بری سفر؟ 
            </h3>
            <h1> به سفرگرامر خوش اومدی </h1>
            <div className="separator"></div>
            <p>
                دوست داری با خودت و تیپ شخصیتیت بیشتر آشنا بشی و بدونی آدمای با این تیپ شخصیتی  کجا دوست دارن برن سفر؟ اینجا بر اساس تایپ شخصیتیت بهت پیشنهاد میدم که کجا بری که احتمالا بیشتر بهت خوش میگذره
            </p>
            <Button clicked={btnClicked} btnColor={"amethystine"}>
                بزن بریم
            </Button>
        </div>
        </React.Fragment>

    );
}

export default Welcome;
