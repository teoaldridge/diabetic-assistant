import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1>DiaBuddy</h1>
      <div className={classes.buttoncontainer}>
        <Link to="/rotation" className={classes.link}>
          <button className={classes.circlebutton}>Site Rotation</button>
        </Link>
        <Link to="/boluscalculator" className={classes.link}>
          <button className={classes.circlebutton}>Bolus Calculator</button>
        </Link>
        <Link to="/foodchecker" className={classes.link}>
          <button className={classes.circlebutton}>Food Checker</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
