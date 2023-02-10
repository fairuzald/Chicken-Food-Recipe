// Data Fetching
const data = fetch(
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
)
  .then((res) => res.json())
  .then((dataAPI) => {
    outputData(dataAPI.meals);
    return dataAPI.meals;
  });

// Show output data
function outputData(data) {
  const menu = document.getElementById("mapping");
  data.forEach((item) => {
    const dataDetail = fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`
    )
      .then((res) => res.json())
      .then((dataDetailsAPI) => {
        return dataDetailsAPI.meals[0].strInstructions;
      });

    const link = document.createElement("a");
    link.href = `/recipes/${item.idMeal}.html`;

    const container = document.createElement("div");
    container.className = "content-menu";

    const image = document.createElement("img");
    image.className = "menu-img";
    image.loading = "lazy";
    image.src = item.strMealThumb;
    image.alt = item.strMeal

    const child = document.createElement("div");
    child.className = "details-menu";

    const title = document.createElement("h3");
    title.className = "menu-title";
    title.innerText = item.strMeal;

    const description = document.createElement("p");
    description.className = "menu-description";

    dataDetail.then((instructions) => {
      description.innerText = instructions;
    });

    container.appendChild(image);
    child.appendChild(title);
    child.appendChild(description);
    container.appendChild(child);
    link.appendChild(container);
    menu.appendChild(link);
  });
}

// Reset Search
async function handleReset() {
  // Reset now showed menus
  document.getElementById("search-input").value = "";
  const mapping = document.getElementById("mapping");
  mapping.replaceChildren();

  // Updating icon search
  document.getElementById("icons").innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" height="20" width="20" id="search-icon">' +
    '<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />' +
    "</svg>";

  // Add default recipes
  const clearData = await data;
  outputData(clearData);
}

// Update Search
async function handleSearch(event) {
  const icons = document.getElementById("icons");
  let content = "";
  if (event.target.value == "" || null) {
    content =
      '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" height="20" width="20" id="search-icon">' +
      '<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />' +
      "</svg>";
    icons.innerHTML = content;
  } else {
    content =
      '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 320 512" height="20" width="20">' +
      '<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>' +
      "</svg>";
    icons.innerHTML = content;
  }
  // Reset now showed menus
  const mapping = document.getElementById("mapping");
  mapping.replaceChildren();

  // Updating new menu
  const oldData = await data;
  const newData = oldData.filter((updateData) => {
    const dataTitle = updateData.strMeal.toLowerCase();
    const searchInput = event.target.value.toLowerCase();
    return dataTitle.includes(searchInput);
  });
  outputData(newData);
}
