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
    let elementUrl = "https://api.themoviedb.org/3/tv/" ;   
    var id = $_GET('element');
    let serie = elementUrl + id + '?' + apiKey;

    //DOCUMENT ELEMENTS
    const nameElement = document.getElementById('name');
    const genres = document.getElementById('genres');
    const createdBy = document.getElementById('created_by');
    const vote_average = document.getElementById('vote_average')
    const tagline = document.getElementById('tagline');
    const firstAirDateElement = document.getElementById('first_air_date');
    const poster= document.getElementById('poster');
    const overview = document.getElementById('overview');
    const seasons = document.getElementById('seasons');
    const productionCompanies = document.getElementById('production_companies');
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

    fetch(serie)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let serieName = response.name;
        let serieId= response.id;
        console.log(serieId);
        nameElement.innerText = serieName;
        tagline.innerText = response.tagline
        vote_average.innerHTML = 'Score <br>' + '<span class="' + getColor(response.vote_average) + ' score '+ '">' + response.vote_average + '</span>';

        
        if(response.poster_path != null ) {
            posterUrl = imgUrl + response.backdrop_path
        } else {
            posterUrl = 'assets/unavailable.jpg'
        }
        poster.setAttribute('src', posterUrl);
        
        firstAirDateElement.innerText = "First air date : " + response.first_air_date;
        overview.innerText = response.overview;

        let serieGenres = []

        response.genres.forEach(genre => {
            let li = document.createElement('li');
            li.innerText = genre.name;
            genres.appendChild(li);
            serieGenres.push(genre.id)
        })

        elementUrl = "https://api.themoviedb.org/3/discover/tv?";
        serie = elementUrl + genresUrl + encodeURI(serieGenres.join(',')) + '&' +  apiKey 
        similarSeries(serie, serieId)



        response.production_companies.forEach(productionCompany => {
            let li = document.createElement('li');
            li.innerText = productionCompany.name;
            productionCompanies.appendChild(li)
            
        })

        
        response.created_by.forEach(author => {
            let li = document.createElement('li');
            li.innerText = author.name;
            createdBy.appendChild(li)
            
        })

        response.spoken_languages.forEach(language => {
            let li = document.createElement('li');
            li.innerText = language.english_name;
            spoken_languages.appendChild(li)
            
        })

        response.seasons.forEach(season => {
            console.log(season);
            let card = document.createElement('div');
            card.classList.add('card', 'mb-4', 'marginer');
            let cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            cardHeader.innerHTML = '<div class="season_name">' + season.name + '</div><div class="season_date">Air date : '+ season.air_date + '</div><div class="season_episodes">Episodes : '+season.episode_count + '</div>';
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            let cardText = document.createElement('div')
            cardText.classList.add('card-text');
            cardText.innerText = season.overview;

            seasons.appendChild(card);
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            cardBody.appendChild(cardText);
            



            
            // li.innerHTML = season.name + '<ul><li> Air date :' + season.air_date + '</li><li>' + season.episode_count + ' episodes </li></ul>';
            // seasons.appendChild(li);

            
        })
    })

 
    function similarSeries(serie, serieId) {
        fetch(serie)
        .then(response => response.json())
        .then(response =>{
            
            response.results.forEach(result => {
                let detailLink ='seriedetails?element=';
                let container = document.getElementById('container');  
                showElements(result, result.title, result.id, detailLink, container);
            })

            //Delete the movie double in the suggestions similar list
            let serieToDelete = document.getElementById(serieId)
            container.removeChild(serieToDelete);
        })     
    }
});