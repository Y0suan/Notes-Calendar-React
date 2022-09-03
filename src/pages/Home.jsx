import React from 'react';
import Createbtn from '../component/ButtonLink/Createbtn';
import LoginBtn from '../component/ButtonLink/LoginBtn';
import ContbtnHome from '../component/Conteiners/ContbtnHome';
import ContTextHome from '../component/Conteiners/ContTextHome';
import TextTitle from '../component/Text/TextTitle';
import './Home.css';


function Home({user}) {
  return (
    <div className='todo'>
      <ContTextHome>
            <TextTitle>Note Calendar</TextTitle>

            {  user.data?.email || <ContbtnHome ><LoginBtn/> <Createbtn/></ContbtnHome> }
            
        </ContTextHome>
        <div className='img'></div>
    </div>
  )
}

export default Home