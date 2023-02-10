html_template = """

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="../src/ayam.png" />
    <link rel="stylesheet" href="../style/styleHeader.css" />
    <link rel="stylesheet" href="../style/styleRecipe.css" />
    <script src="../script/scrollNavbar.js"></script>
    <script src="../script/detail.js"></script>
    <title></title>
  </head>
  <body>
    <div class="main">
      <header>
        <div>
          <button class="hamburger" id="hamburger">
            <span class="hamburgerline-top"></span>
            <span class="hamburgerline-mid"></span>
            <span class="hamburgerline-bottom"></span>
          </button>
          <nav id="nav-menu" class="hidden">
            <ul>
              <li class="nav-list"><a href="../index.html">Home</a></li>
              <li class="nav-list"><a href="../menu/recipes.html">Menu</a></li>
              <li class="nav-list"><a href="../about.html">About</a></li>
              <li class="nav-list">Soon</li>
            </ul>
          </nav>
        </div>
        <p class="logo"><a href="../index.html"><img src="../src/ayam.png" width="50" height="50" alt="KickIn"/></a></p>
      </header>
      <h1 class="title"></h1>
      <a href="../menu/recipes.html">
        <svg role="button" class="back-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </a>
      <div class="detail-recipe">
        <img src="" class="recipe-img" alt="Detail Food Images"></img>
        <div class="content-recipe">
          <p>Ingredients :</p>
          <ul class="ingredients"></ul>
          <p>Recipe :</p>
          <ol class="recipe"></ol>
        </div>
      </div>
    </div>
  </body>
</html>
"""

names = ["53050", "52940", "53016", "52846", "52796", "52934", "52956", "52850", "52765", "52818", "52875", "52795", "52831", "52920", "52879", "53011", "52832", "52830", "52996", "52951", "52993", "52937", "52820", "52813", "52945", "52851", "52774", "53039", "52780", "52933", "53020", "53028", "52806", "52772", "52814"]

for name in names:
  with open(f"{name}.html", "w") as f:
    f.write(html_template.format(title=name))
