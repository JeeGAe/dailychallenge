const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: { from: "0", size: "20", tags: "under_30_minutes" },
  headers: {
    "x-rapidapi-host": "tasty.p.rapidapi.com",
    "x-rapidapi-key": "31276411cfmsh0efd07dc2760712p136b67jsnbcdc93b074f2"
  }
}
const Button = document.querySelector('#button-nav');
const movieContainer = document.querySelector('#movie-container');
const recipeContainer = document.querySelector('#recipe-container');

function showMovie(movieData){
  const divTag = document.createElement('div');
  divTag.innerHTML = `
  <div class="row row-cols-1 row-cols-md-1 g-4">
    <div class="col">
      <div class="card">
        <img src="${movieData.large_cover_image}" class="card-img-top" alt="...">
        <div class="card-body" style="overflow: hidden; min-height: 300px; height: 300px;">
          <h4 class="card-title">${movieData.title}</h4>
          <h5 class="card-title">[${movieData.genres}]</h5>
          <p class="card-text">${movieData.summary}</p>
        </div>
      </div>
    </div>`;
  movieContainer.append(divTag);
}
function showRecipe(recipeDate){
  const divTag = document.createElement('div');
  divTag.innerHTML = `
  <div class="row row-cols-1 row-cols-md-1 g-4">
    <div class="col">
      <div class="card">
        <div style="width: 100%; height: 50%;">
        <img src="${recipeDate.thumbnail_url
        }" class="card-img-top" alt="...">
        </div>
        <div class="card-body" style="overflow: hidden; min-height: 300px; height: 300px;">
          <h4 class="card-title">${recipeDate.name}</h4>
          <h5 class="card-title">[${recipeDate.nutrition.calories} cal]</h5>
          <p class="card-text">${recipeDate.description}</p>
        </div>
      </div>
    </div>`;
    recipeContainer.append(divTag);
}
function changeList(event){
  if(event.target.id !== Button.id && event.target.id === 'movie'){
    movieContainer.style = '';
    recipeContainer.style = 'display: none';
  }else if(event.target.id !== Button.id && event.target.id === 'recipe'){
    recipeContainer.style = '';
    movieContainer.style = 'display: none';
  }
}

fetch("https://yts.mx/api/v2/list_movies.json")
.then(res => res.json())
.then(res => {
  res.data.movies.forEach(showMovie);
  return fetch("https://tasty.p.rapidapi.com/recipes/list", options)
}).then(res => res.json())
.then(res => {
  res.results.forEach(showRecipe);
})

Button.addEventListener('click', changeList);