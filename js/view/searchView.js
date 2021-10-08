import {searchResult,searchInput} from '../elements.js'


 export let getSearchInputValue=() => searchInput.value
   
  export function displaySearchResults(recipes)
  {
    let markUp=``;

    for(let i =0 ; i < recipes.length ; i++)
    {

      markUp+=`
      <div class="media py-3 d-flex align-items-center">
      
      <img src="${recipes[i].image_url}" class ="m-2 rounded-circle align-self-center mr-3" alt="...">
      <div class="media-body  ">
      <a class="text-decoration-none  "  href="#${recipes[i].recipe_id}">
        <h6 class="mt-0">${recipes[i].title}</h6>
        <p>by <span>${recipes[i].publisher}</span></p>
        </a>

      </div>
    </div>
`

    }

    searchResult.innerHTML = markUp
    
  }
