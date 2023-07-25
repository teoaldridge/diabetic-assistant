import React from "react";

interface BolusResultsProps {
  recommendedBolus: number;
}

const BolusResults: React.FC<BolusResultsProps> = ({ recommendedBolus }) => {
  return (
    <div>
      <h2>Bolus Recommendation</h2>
      <p>Recommended Bolus: {recommendedBolus}</p>
    </div>
  );
};

export default BolusResults;
