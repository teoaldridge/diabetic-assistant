import React from "react";
import classes from "./BolusResults.module.css";

interface BolusResultsProps {
  recommendedBolus: number | string;
}

const BolusResults: React.FC<BolusResultsProps> = ({ recommendedBolus }) => {
  return (
    <div className={classes.bolusresultscontainer}>
      <h2 className={classes.bolusresultsheading}>Bolus Recommendation</h2>
      <p className={classes.bolusresultstext}>{recommendedBolus}</p>
    </div>
  );
};

export default BolusResults;
