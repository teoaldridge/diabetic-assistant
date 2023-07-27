import axios from "axios";
import { useState } from "react";
import "./FoodChecker.module.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodData, setFoodData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/food-database/v2/parser`,
        {
          params: {
            app_id: "ef55a799", // Replace with your Edamam app ID
            app_key: "29c343ff5161b831727b76cc63abe625", // Replace with your Edamam app key
            ingr: searchTerm,
          },
        }
      );
      setFoodData(response.data.parsed);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <form onSubmit={handleSearch}>
            <div className="form-group">
              <label>Search for a food item:</label>
              <input
                type="text"
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      {foodData && (
        <div className="row mt-4">
          <div className="col">
            <table>
              <thead>
                <tr>
                  <th>Food Name</th>
                  <th>Calories</th>
                  <th>Protein (g)</th>
                  <th>Fat (g)</th>
                  <th>Carbs (g)</th>
                </tr>
              </thead>
              <tbody>
                {foodData.map((food, index) => (
                  <tr key={index}>
                    <td>{food.food.label}</td>
                    <td>{food.food.nutrients.ENERC_KCAL.toFixed(2)}</td>
                    <td>{food.food.nutrients.PROCNT.toFixed(2)}</td>
                    <td>{food.food.nutrients.FAT.toFixed(2)}</td>
                    <td>{food.food.nutrients.CHOCDF.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
