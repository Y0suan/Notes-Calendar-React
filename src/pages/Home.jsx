import React from 'react';
import Createbtn from '../component/ButtonLink/Createbtn';
import LoginBtn from '../component/ButtonLink/LoginBtn';
import UserNav from '../component/User/UserNav';
import './Home.css';


function Home() {
  return (
    <div className='todo'>
        <div className='text'>
            <h1>Note Calendar</h1>

            {/* <UserNav></UserNav> */}

            <div className='btn'>
            <LoginBtn/> <Createbtn/>
            </div> 
        </div>
        <div className='img'></div>
    </div>
  )
}

export default Home