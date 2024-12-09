import React, { useState } from "react";
import Login from "../components/Login/Login";
import { isAuthenticated } from "../services/authService";

// const LoginPage: React.FC = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   return (
//     <div>
//       {loggedIn ? (
//         <h2>Welcome back!</h2> // Show when logged in
//       ) : (
//         // Pass the loggedIn state and setLoggedIn function to Login component
//         <Login loggedIn={loggedIn} email="test" setLoggedIn={setLoggedIn} />
//       )}
//     </div>
//   );
// };

 const LoginPage: React.FC = () => {
    //const [loggedIn, setLoggedIn] = useState(false);
    return (
      <div>
        {isAuthenticated() ? (
          <h2>Welcome back!</h2> // Show when logged in
        ) : (
          // Pass the loggedIn state and setLoggedIn function to Login component
          <Login email={""} isAuthenticated={isAuthenticated()} />
        )}
      </div>
    );
  };

export default LoginPage;