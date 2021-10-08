export class recipeDetailModel
{
  constructor(id)
  {
    this.id=id
  }

  getRecipeDetail(callBack){
    let http = new XMLHttpRequest();
    http.open('get', `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);

    http.send();

    http.addEventListener('readystatechange',()=>{

      if(http.readyState==4 && http.status==200)
      {
        let recipeDetails = JSON.parse(http.response).recipe;
        callBack(recipeDetails)

      }

    }) 

  }
}