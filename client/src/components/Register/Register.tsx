import React, { useState } from 'react'
import classes from "./Register.module.css";
import { isAuthenticated, login, logout } from '../../services/authService';
import { Link } from 'react-router-dom';

interface LoginProps {
  registered: boolean;
  email: string;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>; //added
}
const Register: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false); //added

  console.log(JSON.stringify(props))
  const onButtonClick = async () => {
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

    //added
    try {
      // Call login function from authService
      const user = await login({ email, password });

      // If register is successful, update the registered state and store token
      console.log('Logged in user:', user);
      props.setRegistered(true); // Assuming parent component handles loggedIn state

      // Optionally, you can redirect or update the UI here after login is successful
    } catch (err) {
      console.error(err)
      setPasswordError('Invalid email or password:' + err);
    } finally {
      setLoading(false); // Stop loading
    }

    console.log(isAuthenticated())

    logout();

    console.log(isAuthenticated())
  
    // Authentication calls will be made here...
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <h1>Register</h1>
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
        <input className={classes.inputButton} type="button" onClick={onButtonClick} value={'Register'} />
       <h4>If you already have an account please{" "}
        <Link to="/login" className={classes.loginlink}>
          login
        </Link>.
       </h4>
      </div>
    </div>
  )
}

export default Register;