import {recipeDetailsContainer} from '../elements.js'

export function displayRecipeDetail(recipe) {
  
  let ingredients = recipe.ingredients

  let markUp=`
  <h3 class="p-2">${recipe.title}</h3>
  <img src="${recipe.image_url}" class="w-100" alt="">
  <div id="recipe-ingradient">
  
      <ul class="fa-ul d-flex flex-wrap p-4">`;
      for(let i = 0; i<ingredients.length; i++){
        markUp +=`<li class="p-2 w-50"><span class="fa-li"><i class="fas color-red fa-utensils"></i></span><p>${ingredients[i]}</p>
        </li>`
      }
  markUp +=`</ul>
  </div>`
          
  

  
recipeDetailsContainer.innerHTML=markUp
  


}