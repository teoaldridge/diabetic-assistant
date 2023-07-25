import React, { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./BolusForm.module.css";

interface BolusFormProps {
  onSubmit: (recommendedBolus: number | string) => void;
}

const BolusForm: React.FC<BolusFormProps> = ({ onSubmit }) => {
  const [totalCarbs, setTotalCarbs] = useState<number>(0);
  const [bloodGlucose, setBloodGlucose] = useState<number>(0);
  const [insulinToCarbRatio, setInsulinToCarbRatio] = useState<number>(0);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const recommendedBolus = calculateRecommendedBolus(
      totalCarbs,
      bloodGlucose,
      insulinToCarbRatio
    );
    onSubmit(recommendedBolus);
  };

  const resetHandler = () => {
    console.log("I reset!");
    setTotalCarbs(0);
    setBloodGlucose(0);
    setInsulinToCarbRatio(0);
  };

  return (
    <Form onSubmit={handleFormSubmit} className={classes.form}>
      <div>
        <label>Total Carbs (g.):</label>
        <input
          type="number"
          value={totalCarbs}
          onChange={(e) => setTotalCarbs(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Blood Glucose (mmol/L):</label>
        <input
          type="number"
          value={bloodGlucose}
          onChange={(e) => setBloodGlucose(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Insulin to Carb Ratio (g.):</label>
        <input
          type="number"
          value={insulinToCarbRatio}
          onChange={(e) => setInsulinToCarbRatio(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit">Calculate Recommended Bolus</button>
      <button
        onClick={resetHandler}
        type="reset"
        className={classes.resetbutton}
      >
        Reset
      </button>
    </Form>
  );
};

export default BolusForm;

function calculateRecommendedBolus(
  totalCarbs: number,
  bloodGlucose: number,
  insulinToCarbRatio: number
): number | string {
  // Blood Glucose target range: 80-120 mg/dL (4.4-6.7 mmol/L)
  const targetLowerLimit: number = 4.4;
  const targetUpperLimit: number = 8.0;

  // Correction Factor (CF): 1 unit per 30 mg/dL (1.67 mmol/L)
  const correctionFactor: number = 1 / 2;

  // Calculate bolus for carbs
  const insulinForCarbs: number = totalCarbs / insulinToCarbRatio;
  console.log(`InsulinForCarbs: ${insulinForCarbs.toFixed(2)} units`);

  // Calculate correction bolus
  const glucoseDifference: number = Math.max(
    0,
    bloodGlucose - targetUpperLimit
  );
  const correctionBolus: number = glucoseDifference * correctionFactor;
  console.log(`CorrectionBolus: ${correctionBolus.toFixed(2)} units`);

  // Calculate total recommended bolus
  const recommendedBolus: number = insulinForCarbs + correctionBolus;

  if (bloodGlucose < 3.5) {
    return "Your BG is running low. Please do not take insulin now and check again after 15 mins.";
  } else {
    return recommendedBolus;
  }
}
