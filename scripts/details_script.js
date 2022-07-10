import showElements from './elements_script.js'

window.addEventListener("DOMContentLoaded", (event) => {

    
    function $_GET(param) {
        var vars = {};
        window.location.href.replace( location.hash, '' ).replace( 
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );
    
        if ( param ) {
            return vars[param] ? vars[param] : null;	
        }
        return vars;
    }

    //API VARIABLES FOR URL 
    const apiKey = "api_key=96815eea001b9c63c98ad5714bdd9c38" ;
    let elementUrl = "https://api.themoviedb.org/3/movie/" ;   
    var id = $_GET('element');
    let movie = elementUrl + id + '?' + apiKey;

    //DOCUMENT ELEMENTS
    const titleElement = document.getElementById('title');
    const genres = document.getElementById('genres');
    const vote_average = document.getElementById('vote_average')
    const tagline = document.getElementById('tagline');
    const releaseDateElement = document.getElementById('release_date');
    const poster= document.getElementById('poster');
    const overview = document.getElementById('overview')
    const budget = document.getElementById('budget');
    const productionCompanies = document.getElementById('production_companies');
    const revenue = document.getElementById('revenue');
    const spoken_languages = document.getElementById('spoken_languages');
    const imgUrl = "https://image.tmdb.org/t/p/w500";
    let posterUrl = '';
    let genresUrl = 'with_genres=';

    function getColor(vote) {
        if(vote >= 8) {
            return 'green'
        }else if (vote >=5){
            return "orange"
        } else {
            return 'red'
        }
            
    }

    fetch(movie)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let movieTitle = response.title;
        let movieId = response.id;
        console.log(movieId);
        titleElement.innerText = movieTitle;
        tagline.innerText = response.tagline
        vote_average.innerHTML = 'Score <br>' + '<span class="' + getColor(response.vote_average) + ' score '+ '">' + response.vote_average + '</span>';

        if(response.poster_path != null ) {
            posterUrl = imgUrl + response.backdrop_path
        } else {
            posterUrl = 'assets/unavailable.jpg'
        }
        poster.setAttribute('src', posterUrl);
        
        releaseDateElement.innerText = "Release date : " + response.release_date;
        overview.innerText = response.overview;

        let movieGenres = []

        response.genres.forEach(genre => {
            let li = document.createElement('li');
            li.innerText = genre.name;
            genres.appendChild(li);
            movieGenres.push(genre.id)
        })

        elementUrl = "https://api.themoviedb.org/3/discover/movie?";
        movie = elementUrl + genresUrl + encodeURI(movieGenres.join(',')) + '&' +  apiKey 
        similarMovies(movie, movieId)
    
        budget.innerText = "Budget : " + response.budget;
        response.production_companies.forEach(productionCompany => {
            let li = document.createElement('li');
            li.innerText = productionCompany.name;
            productionCompanies.appendChild(li)
            
        })

        response.spoken_languages.forEach(language => {
            let li = document.createElement('li');
            li.innerText = language.english_name;
            spoken_languages.appendChild(li)
            
        })
    })

 
    function similarMovies(movie, movieId) {
        fetch(movie)
        .then(response => response.json())
        .then(response =>{
            
            response.results.forEach(result => {
      
                showElements(result, result.title, result.id);
            })

            //Delete the movie double in the suggestions similar list

            let movieToDelete = document.getElementById(movieId)
            container.removeChild(movieToDelete);
        })     
    }
});