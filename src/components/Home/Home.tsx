import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Diabetic Assistant</h1>
      <h3>
        Go to <Link to="/boluscalculator">Bolus Calculator</Link>
      </h3>
      <h3>
        Go to <Link to="/foodchecker">Food Checker</Link>
      </h3>
      <h3>
        Go to <Link to="/rotation">Injection/Pump Site Rotation</Link>
      </h3>
    </div>
  );
};

export default Home;
