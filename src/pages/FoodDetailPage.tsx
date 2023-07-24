import { useParams } from "react-router-dom";

const FoodDetailPage: React.FC = () => {
  const params = useParams();

  return (
    <>
      <h1>Food details</h1>
      <p>{params.foodId}</p>
    </>
  );
};

export default FoodDetailPage;
