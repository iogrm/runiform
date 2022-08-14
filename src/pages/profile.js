import React,{useEffect,useState} from 'react';
import {Route, Link, Routes, useParams, Navigate} from 'react-router-dom';
import Informations from '../containers/informations/informations';
import Places from '../containers/places/places';
import './style/profile.css'

const Profile=(props) =>{

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  let redirect = null;
  if(props.mbtiType==="xxxx"){
    redirect = <Navigate to={'/'} replace={true} />
  }

  return (
    <React.Fragment>
      {redirect}
    <div className='profile'>
        <Informations mbtiType={props.mbtiType}/>
        <Places mbtiType={props.mbtiType}/>
    </div>
    </React.Fragment>
  );
}

export default Profile;
