import React, { useState } from 'react'
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

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
  
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
  
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
  
    // Authentication calls will be made here...
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
        <label className={classes.errorLabel}>{emailError}</label>
      </div>
      <br />
      <div className={classes.inputContainer}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={classes.inputBox}
        />
        <label className={classes.errorLabel}>{passwordError}</label>
      </div>
      <br />
      <div className={classes.inputContainer}>
        <input className={classes.inputButton} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login