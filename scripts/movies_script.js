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

    //SORT BY VARIABLES FOR URL
    const sortBySelector = document.getElementById('sort_by');
    const container = document.getElementById('container');

    function getMovies(url) {

        fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.results.length !== 0 ) {
                data.results.forEach(element => {

                    let title = element.original_title;
                    let id = element.id;
                    let detailLink = 'moviedetails?element=';
    
                    if (element.adult == false ) {
                        showElements(element, title, id, detailLink)
                    }
                })

            } else {
                let message = document.createElement('div');
                message.classList.add('message');
                message.innerText = 'No films featuring the combination of the selected genres were found.'
                container.append(message)
                
            }
        })
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
            sortByFunc();
            setGenre(genres)
            
            container.innerHTML = '';

            selectedGenre.forEach(genreSelection => {

                
                for(i=1 ; i<=5 ; i ++ ) {
                    movies = moviesUrl + sortBy + genresUrl + encodeURI(selectedGenre.join(',')) + '&' +  apiKey + pageUrl + i
                    getMovies(movies)
                }

            })


        })

    })

    function setGenre(genres){
  
        tags.innerHTML = '';

        sortBySelector.addEventListener('change', () => {
            sortByFunc();
        })

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
  
                
                highlightSelection()

            })
            
            return selectedGenre;
        })    
    }

    function sortByFunc (){

        container.innerHTML = '';

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