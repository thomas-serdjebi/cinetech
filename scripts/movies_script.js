import showElements from './elements_script.js'

window.addEventListener("DOMContentLoaded", (event) => {

    //API VARIABLES FOR URL 
    const apiKey = "api_key=96815eea001b9c63c98ad5714bdd9c38" ;
    const moviesUrl = "https://api.themoviedb.org/3/discover/movie?" ;
    const pageUrl = "&page=" ;
    let i = 1;
    var selectedGenre = [] ;
    let genresUrl = 'with_genres=';
    let sortBy = 'sort_by=popularity.desc&';
    let movies = moviesUrl + sortBy  + apiKey + pageUrl + i 
    let genreSelection='';
    let results =  '';

    //SORT BY VARIABLES FOR URL
    const sortBySelector = document.getElementById('sort_by');

    function getMovies(url) {

        fetch(url)
        .then(response => response.json())
        .then(data => {

            results = data ;

            if (data.results.length !== 0 ) {
                data.results.forEach(element => {

                    let title = element.original_title;
                    let id = element.id;
                    let detailLink = 'moviedetails?element=';
                    let container = document.getElementById('container');
    
                    if (element.adult == false ) {
                        showElements(element, title, id, detailLink, container)
                    }
                })
            }    
        })
        
        return results;
    }

   for ( i = 1 ; i<=5 ; i++) {
        movies = moviesUrl + sortBy  + apiKey + pageUrl + i
        getMovies(movies)
    }

    const genresUrlApi = "https://api.themoviedb.org/3/genre/movie/list?";
    const genresList = genresUrlApi + apiKey;
    const tags = document.getElementById('tags');

    fetch(genresList)
    .then(response=>response.json())
    .then(response => {

        let genres = response.genres;
        setGenre(genres)

        sortBySelector.addEventListener('change', ()=>{

            container.innerHTML='';
            sortByFunc()
            
            if(selectedGenre.length == 0 ) {
                for ( i = 1 ; i<=5 ; i++) {
                    movies = moviesUrl + sortBy  + apiKey + pageUrl + i
                    getMovies(movies)
                }
            } else {
                for(i=1 ; i<=5 ; i ++ ) {
                    movies = moviesUrl + sortBy + genresUrl + encodeURI(selectedGenre.join(',')) + '&' +  apiKey + pageUrl + i
                    getMovies(movies);
                    
                }
            }
        })
    })

    function setGenre(genres){
  
        tags.innerHTML = '';
        sortByFunc();

        genres.forEach(genre => {

            const tag = document.createElement('div');
            tag.classList.add('tag');
            tag.id = genre.id;
            tag.innerText = genre.name;
            tags.append(tag);

            tag.addEventListener('click', () => {
                    
                if(selectedGenre.length == 0) {
                    selectedGenre.push(genre.id);
                } else {
                    if(selectedGenre.includes(genre.id)) {
                        selectedGenre.forEach((id, idx) =>{
                            if (id == genre.id) {
                                selectedGenre.splice(idx, 1);
                            }
                        })
                    } else {
                        selectedGenre.push(genre.id);
                    }
                }

                container.innerHTML = '';

                for(i=1 ; i<=5 ; i ++ ) {
                    movies = moviesUrl + sortBy + genresUrl + encodeURI(selectedGenre.join(',')) + '&' +  apiKey + pageUrl + i
                    getMovies(movies)
                }

                let div = document.getElementById('message')
                let message = 'No movies combining the categories you selected were found.'

                if(results.results.length == 0 ) {
                    container.innerHTML = '';
                    div.innerText = message
                }
  
                if (results.results.length != 0 ) {    
                    div.innerText = '';
                }

                highlightSelection()
            })

            return selectedGenre;
        })    
    }

    function sortByFunc (){

        switch(sortBySelector.value) {
            case 'From A to Z' : sortBy ="sort_by=original_title.asc&";
            break;
            case 'From Z to A' : sortBy ="sort_by=original_title.desc&";
            break;
            case 'Most recent' : sortBy ="sort_by=release_date.desc&";
            break;
            case 'More popular' : sortBy ="sort_by=popularity.desc&";
            break;
            case 'Top rated' : sortBy ="sort_by=vote_average.desc&";
            break;
        }
        return sortBy;   
    }

    function highlightSelection() {

        const tags = document.querySelectorAll('.tag')

        tags.forEach(tag => {
            tag.classList.remove('highlight')
        })


        if (selectedGenre.length !=0 ) {
            selectedGenre.forEach( (id) => {
                const highlightTag = document.getElementById(id);
                highlightTag.classList.add('highlight');

            })
        }
    }
});