import BolusForm from "../components/BolusForm/BolusForm";

const BolusCalculatorPage: React.FC = () => {
  const handleFormSubmit = (recommendedBolus: number | string) => {
    // You can handle the recommendedBolus value here as needed.
    console.log("Recommended Bolus:", recommendedBolus);
  };

  return (
    <>
      <div className="App">
        <h1>Insulin Bolus Calculator</h1>
        <BolusForm onSubmit={handleFormSubmit} />
      </div>
    </>
  );
};

export default BolusCalculatorPage;

// function calculateRecommendedBolus(
//   totalCarbs: number,
//   bloodGlucose: number,
//   insulinToCarbRatio: number
// ): number {
//   // Blood Glucose target range: 80-120 mg/dL (4.4-6.7 mmol/L)
//   const targetLowerLimit: number = 4.4;
//   const targetUpperLimit: number = 8.0;

//   // Correction Factor (CF): 1 unit per 30 mg/dL (1.67 mmol/L)
//   const correctionFactor: number = 1 / 2;

//   // Calculate bolus for carbs
//   const insulinForCarbs: number = totalCarbs / insulinToCarbRatio;
//   console.log(`InsulinForCarbs: ${insulinForCarbs.toFixed(2)} units`);

//   // Calculate correction bolus
//   const glucoseDifference: number = Math.max(
//     0,
//     bloodGlucose - targetUpperLimit
//   );
//   const correctionBolus: number = glucoseDifference * correctionFactor;
//   console.log(`CorrectionBolus: ${correctionBolus.toFixed(2)} units`);

//   // Calculate total recommended bolus
//   const recommendedBolus: number = insulinForCarbs + correctionBolus;

//   return recommendedBolus;
// }

// const totalCarbsInGrams: number = 24; // Replace with the actual value in grams
// const bloodGlucoseInMmolL: number = 2.0; // Replace with the actual value in mmol/L
// const insulinToCarbRatioInGrams: number = 12; // Replace with the actual value in grams

// const recommendedBolus: number = calculateRecommendedBolus(
//   totalCarbsInGrams,
//   bloodGlucoseInMmolL,
//   insulinToCarbRatioInGrams
// );

// if (bloodGlucoseInMmolL < 3.5) {
//   console.log(
//     "Your BG is running low. Please do not take insulin now and check again after 15 mins."
//   );
// } else {
//   console.log(`Recommended Bolus: ${recommendedBolus.toFixed(2)} units`);
// }
