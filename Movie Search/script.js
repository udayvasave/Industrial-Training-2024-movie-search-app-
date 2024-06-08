const API_URL ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5bc36717c710952389be4611b54143e2&page=1'
const image_path = 'https://image.tmdb.org/t/p/w1280'
const Search_URL ='https://api.themoviedb.org/3/search/movie??include_adult=false&language=en-US&page=1&api_key=5bc36717c710952389be4611b54143e2&query="'

// DOM manipulation

const form = document.getElementById('form');

const search = document.getElementById('search');

const main = document.getElementById('main')
// //////////////////////////////////////////////////////

// const movieInfo = document.getElementsByClassName('.moive-info')

////////////////////////////////////////////////////////



async function getMovies(url) {

    const response = await fetch(url);
    const data =  await response.json();
    console.log(data.results);
    showMovies(data.results);

}

/////////////////////////////////////////////////////////////////////////////////


function showMovies (movies){
main.innerHTML = ''
movies.forEach((movie)=> {
    const {title, poster_path, vote_average, overview } = movie;

    const movieEl =document.createElement('div');
    movieEl.innerHTML = `
        <div class="movie">
        <img src="${image_path + poster_path}" id="movie-image" alt="">
        <div class="movie-info">
            <h3> ${title}</h3>
            <span class="rating">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>
    </div>
    `
   
    
main.appendChild(movieEl);

})
}






///////////////////////////////////////////////
form.addEventListener('submit', (event)=> {
event.preventDefault();

const searchTerm = search.value

if(searchTerm && searchTerm !== '') {
getMovies(Search_URL + searchTerm);
search.value=''
} else{
    window.location.reload();
}












} )
