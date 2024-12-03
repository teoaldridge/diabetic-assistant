import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./Login.module.css";

interface LoginProps {
  loggedIn: boolean;
  email: string;
}
const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later...
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <h1>Login</h1>
      </div>
      <br />
      <div className={classes.inputContainer}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={classes.inputBox}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={classes.inputContainer}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={classes.inputBox}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={classes.inputContainer}>
        <input className={classes.inputButton} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login