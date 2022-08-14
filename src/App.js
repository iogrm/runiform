import React,{useState} from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Profile from './pages/profile';
import Test from './pages/test';
import Welcome from './pages/welcome';
import { Navigate } from 'react-router-dom';

const App=() =>{

  const[mbtiState,setMbti]=useState('xxxx');
  
  return (
    
    <BrowserRouter>
      <div className="App"> 
        <Routes>
          {/* <Route path="/welcome" element={<Welcome />} /> */}
          {/* <Route path="/" element={<Navigate replace to="/welcome" />} /> */}
          <Route path='/' element={<Test mbtiHandler={setMbti}/>} />
          <Route path='/profile' element={<Profile mbtiType={mbtiState}/>} />
          {/* <Route path='/profile/:mbti' element={<Profile/>} /> */}
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
