import { Link } from "react-router-dom";
const FOODS = [
  { id: "p1", title: "Apples" },
  { id: "p2", title: "Bananas" },
  { id: "p3", title: "Strawberries" },
];
const FoodCheckerPage: React.FC = () => {
  return (
    <div>
      <h1>Food Checker Page</h1>
      <ul>
        {FOODS.map((food) => (
          <li key={food.id}>
            <Link to={`/foodchecker/${food.id}`}>{food.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodCheckerPage;
