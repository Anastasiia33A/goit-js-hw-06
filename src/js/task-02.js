const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientsMarkup = ingredients.map(ingredient => {
    const ingredientAll = document.createElement('li');
    ingredientAll.textContent = [ingredient];
    ingredientAll.classList.add('item');
    
    return ingredientAll;
});

ingredientsListEl.append(...ingredientsMarkup);
console.log(ingredientsListEl);
console.log(ingredientsMarkup);