import {SearchModel} from './model/searchModel.js'
import {recipeDetailModel} from './model/recipeDetails.js'
import {displaySearchResults,getSearchInputValue} from './view/searchView.js';
import {displayRecipeDetail} from './view/recipeDetailsView.js'
import {searchBtn} from './elements.js'

let controlSearch = ()=>
{
  let query = getSearchInputValue()
  let search = new SearchModel(query);
  search.getSearchResult(displaySearchResults)

}

searchBtn.addEventListener('click',controlSearch);

let controlRecipe= () => {

  let recipeId=window.location.hash.replace("#","")
  let recipeDetais = new recipeDetailModel(recipeId)
  recipeDetais.getRecipeDetail(displayRecipeDetail)
  

}


window.addEventListener('hashchange' ,controlRecipe )
