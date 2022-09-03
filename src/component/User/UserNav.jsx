import React from 'react'
import TextMedium from '../Text/TextMedium'
import ImgUser from './ImgUser'
import './UserNav.css'

function UserNav() {
  return (
    <div className='contUser'>
        <div className='contText'>
            <TextMedium>yosuanmulti@gmail.com</TextMedium>
            
        </div>
        <ImgUser></ImgUser> 
    </div>
  )
}

export default UserNav