import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import InputCheckBox from '../../components/InputCheckBox/InputCheckBox'

import { FaFacebook, FaGoogle } from "react-icons/fa";
import loginImage from '../../assets/Friendly handshake-bro.svg'
import './styles.css'

function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const [user, setUser] = useState([])

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassoword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser([{email, password}])
  }

  return (
    <div className="container-login">
      <div className="login-left">
        <div className="login-title">
          <h1>Welcome To My Application</h1>
          <span>Please login to user the plataform</span>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="login-input-text">
              <Input label='Email' value={email} type='text' placeholder='email@gmail.com' onChange={handleEmail}/>
              <Input label='Password' value={password} type='password' placeholder='123456' onChange={handlePassword}/>
            </div>
            <div className="login-input-checkbox">
              <InputCheckBox />
            </div>
            <div className="login-button">
              <Button type='submit' onClick={handleSubmit}/>
            </div>
          </form>
        </div>
        <div className="login-icons">
          <a href="https://www.google.com.br"><FaFacebook /></a>
          <a href="https://www.facebook.com/login/"><FaGoogle /></a>
        </div>
      </div>
      <div className="login-right">
        <img src={loginImage} alt="handsshake" />
      </div>
    </div>
  )
}

export default Home