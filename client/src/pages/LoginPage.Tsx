import React from "react";
import Login from "../components/Login/Login";

const HomePage: React.FC = () => {
  return (
    <div>
      <Login loggedIn={false} email={""}/>
    </div>
  );
};

export default HomePage;