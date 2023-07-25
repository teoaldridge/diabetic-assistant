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
