console.info('js/jsjs.js loaded');
document.addEventListener('prechange', function(event){
  document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
});

function getRandomCocktail(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Ongelma: ' +
              response.status);
          return;
        }


        response.json().then(function(data) {
          console.log(data);
          displayRandomCocktail(data);
        });
      }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

getRandomCocktail();

function displayRandomCocktail(cocktail){
  console.log(cocktail.drinks[0]);

  let drinkSection = document.querySelector('#drink-section');

  let drinkName = document.createElement('h2');
  drinkName.innerHTML = cocktail.drinks[0].strDrink;

  drinkSection.appendChild(drinkName);

  let img = document.createElement('img');
  img.src = cocktail.drinks[0].strDrinkThumb;

  drinkSection.appendChild(img);

  for(let i=1; i<16; i++){
    console.log(i);

    if(cocktail.drinks[0][`strIngredient${i}`] == null){
      break;
    }


    let ingredient = document.createElement('ul');
    ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];
    if(cocktail.drinks[0][`strMeasure${i}`] == null){
      cocktail.drinks[0][`strMeasure${i}`] = 'Chosen amount';
      ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];
    }
    drinkSection.appendChild(ingredient);
  }

  let instuctions = document.createElement('section');
  instuctions.innerHTML = cocktail.drinks[0].strInstructions;

  drinkSection.appendChild(instuctions);

  let button = document.createElement('button');
  button.innerHTML = "Randomize";
  button.style.cssText = 'font-size:25px;position:absolute;top:22px;left:300px;';
  button.addEventListener('click', function(){
    drinkSection.replaceChildren();
    getRandomCocktail();
  })
  drinkSection.appendChild(button);


}