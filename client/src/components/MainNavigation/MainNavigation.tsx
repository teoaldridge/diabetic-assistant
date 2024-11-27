import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rotation"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Site Rotation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/boluscalculator"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Bolus Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foodchecker"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Food Checker
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
