function FoodChecker() {
  var foodItem = "bread";
  async function logFoodInfo(foodItem) {
    const response = await fetch(
      "https://api.edamam.com/api/food-database/v2/parser?ingr=" +
        foodItem +
        "&app_id=ef55a799&app_key=29c343ff5161b831727b76cc63abe625"
    );
    const foodInfo = await response.json();
    console.log(foodInfo);
  }
  logFoodInfo(foodItem);
}

export default FoodChecker;
