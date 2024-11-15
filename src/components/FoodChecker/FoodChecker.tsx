import axios from "axios";
import { useState, FormEvent } from "react";
import classes from "./FoodChecker.module.css";
const appID = process.env.REACT_APP_EDAMAM_APP_ID;
const appKey = process.env.REACT_APP_EDAMAM_APP_KEY;

interface Food {
  food: {
    label: string;
    nutrients: {
      ENERC_KCAL: number;
      PROCNT: number;
      FAT: number;
      CHOCDF: number;
    };
  };
}

const FoodChecker = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [foodData, setFoodData] = useState<Food[] | null>(null);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get<{
        parsed: Food[];
      }>(`https://api.edamam.com/api/food-database/v2/parser`, {
        params: {
          app_id: appID, 
          app_key: appKey, 
          ingr: searchTerm,
        },
      });
      setFoodData(response.data.parsed);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div>
          <div className="col-xs-12 col-md-6">
            <form onSubmit={handleSearch}>
              <div>
                <label>Search for a food item:</label>
                <input
                  type="text"
                  className={classes.formcontrol}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                className={`${classes.btn} ${classes.btnprimary}`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        {foodData && (
          <div className={classes.resultsContainer}>
            <h2>Nutritional values per 100g</h2>
            <table className={classes.table}>
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
        )}
      </div>
      <img
        src="./Edamam_Badge_Light.svg"
        className={classes.edamam}
        alt="EDAMAM attribution"
      />
    </>
  );
};

export default FoodChecker;
