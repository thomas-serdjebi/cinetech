import showElements from './elements_script.js'

window.addEventListener("DOMContentLoaded", (event) => {

    //API VARIABLES FOR URL 
    const apiKey = "api_key=96815eea001b9c63c98ad5714bdd9c38" ;
    const seriesUrl = "https://api.themoviedb.org/3/discover/tv?" ;
    const pageUrl = "&page=" ;
    let i = 1;
    var selectedGenre = [] ;
    let genresUrl = 'with_genres=';
    let sortBy = 'sort_by=popularity.desc&';
    let series = seriesUrl + sortBy  + apiKey + pageUrl + i 
    let genreSelection='';

    //SORT BY VARIABLES FOR URL
    const sortBySelector = document.getElementById('sort_by');
    const container = document.getElementById('container');

    function getMovies(url) {

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (data.results.length !== 0 ) {
                data.results.forEach(element => {
                    let title = element.name;
                    let id = element.id
                    let detailLink = 'seriedetails?element=';
                    let container = document.getElementById('container');
                    showElements(element, title, id, detailLink, container)              
                })

            } else {
                let message = document.createElement('div');
                message.classList.add('message');
                message.innerText = 'No series featuring the combination of the selected genres were found.'
                container.append(message)
                
            }


        })
    }

   for ( i = 1 ; i<=5 ; i++) {
        series = seriesUrl + sortBy  + apiKey + pageUrl + i
        console.log(series)
        getMovies(series);
    }

    const genresUrlApi = "https://api.themoviedb.org/3/genre/tv/list?";
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
                    series = seriesUrl + sortBy + genresUrl + encodeURI(selectedGenre.join(',')) + '&' +  apiKey + pageUrl + i
                    getMovies(series)
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
                    series = seriesUrl + sortBy + genresUrl + encodeURI(selectedGenre.join(',')) + '&' +  apiKey + pageUrl + i
                    getMovies(series)
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