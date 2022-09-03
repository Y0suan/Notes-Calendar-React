import React from 'react';
import { useRef } from 'react';
import './Login.css';
import Form from "../component/Forms/Form"
import Input from "../component/Forms/Imput"
import SubmitButton from "../component/Button/SubmitButton"
function Login() {

  const email = useRef()
  const password = useRef()
  const login = (event)=>{
    event.preventDefault()
    console.log(email.current.value)//current muestras las propiedades del campo
    console.log(password.current.value)
  }



  return (
    <div className='contLogin'>
      <div className='imglogin'  ></div>
      <div className='cartForm'>
        <div className='headerForm'></div>
        <div className='formcont'>
          <h2>log in</h2>
          <Form onSubmit={login} className='formcont2'>
            <Input ref={email}  placeholder='Email' type="email"></Input>
            <Input ref={password} placeholder='Password' type="password"></Input>
            <SubmitButton>login</SubmitButton>
          </Form>
        </div> 
      </div>
    </div>
  )
}

export default Login