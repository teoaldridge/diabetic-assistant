import BolusForm from "../components/BolusForm/BolusForm";
import BolusResults from "../components/BolusResults/BolusResults";
import { useState } from "react";

const BolusCalculatorPage: React.FC = () => {
  const [recommendedBolusResult, setRecommendedBolusResult] = useState<
    number | string | null
  >(null);

  const handleFormSubmit = (recommendedBolus: number | string) => {
    console.log("Recommended Bolus:", recommendedBolus);
    setRecommendedBolusResult(recommendedBolus);
  };

  return (
    <>
      <div className="App">
        <h1>Insulin Bolus Calculator</h1>
        <BolusForm onSubmit={handleFormSubmit} />
        {recommendedBolusResult !== null && (
          <BolusResults recommendedBolus={recommendedBolusResult} />
        )}
      </div>
    </>
  );
};

export default BolusCalculatorPage;
