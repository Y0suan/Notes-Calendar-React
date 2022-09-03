import React from 'react';
import { Link } from 'react-router-dom';
import './Createbtn.css'

function Createbtn() {
  
  return (
    <Link to='/login' className='createbtn'>
      create account
    </Link>

  )
}

export default Createbtn