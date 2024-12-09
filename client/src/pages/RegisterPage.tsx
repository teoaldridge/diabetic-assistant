import React, { useState } from "react";
import Register from "../components/Register/Register";

const RegisterPage: React.FC = () => {
  const [registered, setRegistered] = useState(false);
  return (
    <div>
      {registered ? (
        <h2>You already have an account. You can log in here</h2> // Show when logged in
      ) : (
        // Pass the loggedIn state and setLoggedIn function to Login component
        <Register registered={registered} email="test" setRegistered={setRegistered} />
      )}
    </div>
  );
};

export default RegisterPage;