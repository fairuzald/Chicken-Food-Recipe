// Get ID from params
const paramsId = window.location.pathname
  .replace("/recipes/", "")
  .replace(".html", "");
  
  // Fetch Data
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${paramsId}`)
  .then((res) => res.json())
  .then((dataAPI) => {
    const food = dataAPI.meals[0]
  
    // Head
    document.querySelector("title").innerText = `${food.strMeal}`;

    // Title
    document.querySelector(".title").innerText = food.strMeal;

    // Image
    img = document.querySelector(".recipe-img")
    img.src = food.strMealThumb;
    img.alt = item.strMeal

    // Ingredients
    const ingredients = document.querySelector(".ingredients");
    for (let i = 1; food[`strIngredient${i}`] && food[`strMeasure${i}`]; i++) {
      const li = document.createElement('li');
      li.innerText = `${food[`strMeasure${i}`]} ${food[`strIngredient${i}`]}`;
      ingredients.appendChild(li);
    }

    // Recipe
    const recipe = document.querySelector(".recipe");
    let dataInstruction = food.strInstructions;

    // Convert to array to mapping using ordered list
    let instructions;
    if (dataInstruction.includes("\r\n")) {
      instructions = dataInstruction.split("\r\n\r\n").join("\r\n").split("\r\n");
    } else {
      instructions = dataInstruction.split(". ");
    }

    // Mapping instructions
    instructions.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = item;
      recipe.appendChild(li);
    })
  });