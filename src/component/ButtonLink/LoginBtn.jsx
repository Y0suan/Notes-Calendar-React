import React from 'react';
import { Link } from 'react-router-dom';

import './Loginbtn.css'

function LoginBtn() {
  return (
    
      <Link to='/login' className='btnLogin' >
        log in
      </Link>
      
    
  )
}

export default LoginBtn