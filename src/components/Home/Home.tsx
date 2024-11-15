import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Diabetic Assistant</h1>
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
      <div>
        <h3>Diabuddy Chatbot</h3>
        <iframe src='https://webchat.botframework.com/embed/diabetes-chat-bot-bot?s=YOUR_SECRET_HERE' style={{ minWidth: '400px', width: '40%', minHeight: '500px' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
