import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  loggedIn: boolean;
  email: string;
}

const Login: React.FC<LoginProps> = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    // update this function later
  };

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  );
};

export default Login;

