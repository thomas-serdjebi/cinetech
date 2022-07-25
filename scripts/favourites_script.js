import showElements from './elements_script.js'

window.addEventListener("DOMContentLoaded", (event) => {

    //API VARIABLES FOR URL 
    const apiKey = "api_key=96815eea001b9c63c98ad5714bdd9c38" ;  
    var result = [];
    let container = '';
    let title = '';
    let id ='';
    let detailLink = '';


    function json2array(json){

        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });

        return result;
    }

    fetch('processing/json_favElements.php')
    .then(response => response.json())
    .then(elements => {
        json2array(elements);
    
        let favMovies = result[0]['fav_movies'].split(',');
        let favSeries = result[1]['fav_series'].split(',');
        

        favMovies.forEach(movie => {
            if (movie != "") {
                const elementUrl = "https://api.themoviedb.org/3/movie/" ; 
                const movieUrl = elementUrl + movie + '?' + apiKey;

                fetch(movieUrl)
                .then(response => response.json())
                .then(element => {
                    container = document.getElementById('movie');
                    container.classList.add('container');
                    title = element.title;
                    id = element.id;
                    detailLink = 'moviedetails?element=';
                    showElements(element, title, id, detailLink, container); 
                    
                })
            }
        })

        favSeries.forEach(serie => {
            if (serie != "") {
                const elementUrl = "https://api.themoviedb.org/3/tv/" ; 
                const serieUrl = elementUrl + serie + '?' + apiKey;

                fetch(serieUrl)
                .then(response => response.json())
                .then(element => {
                    container = document.getElementById('tv');
                    container.classList.add('container');
                    title = element.name;
                    id = element.id;
                    detailLink = 'moviedetails?element=';
                    showElements(element, title, id, detailLink, container); 
                    
                })
            }
        })


        

    })

   

    // API VARIABLES FOR URL 
    // const apiKey = "api_key=96815eea001b9c63c98ad5714bdd9c38" ;
    // const searchWord = $_GET('search');
    // const query = '&query=' + searchWord;
    // const seriesUrl = "https://api.themoviedb.org/3/search/tv?" + apiKey + query 
    // const moviesUrl = "https://api.themoviedb.org/3/search/movie?" +  apiKey + query
    // var urls = [
    //     ["series" , seriesUrl],
    //     ["movies" , moviesUrl],
    // ];

    // function getResults(url){

    //     fetch(url[1])
    //     .then(response => response.json())
    //     .then(response => {
    //         let sortResponse = '';
    //         let container = '';
    //         let title = '';
    //         let id ='';
    //         let detailLink = '';

    //         if(url[0] == 'series'){
    //             container = document.getElementById('tv');
    //             container.classList.add('container')

    //             if(response.results.length !=0) {
    //                 sortResponse = response.results.sort((a, b) =>  a.name.localeCompare(b.name));
    //                 sortResponse.forEach(element=>{
    //                     title = element.name;
    //                     id = element.id;
    //                     detailLink = 'seriedetails?element=';
    //                     showElements(element, title, id, detailLink, container);
    //                 })
    //             } else {
    //                 container.innerText = 'No results found';
    //             }
    //         } else if (url[0] == 'movies'){
    //             container = document.getElementById('movie');
    //             container.classList.add('container');

    //             if(response.results.length != 0) {
    //                 sortResponse = response.results.sort((a, b) =>  a.title.localeCompare(b.title));
    //                 sortResponse.forEach(element=>{
    //                     title = element.title;
    //                     id = element.id;
    //                     detailLink = 'moviedetails?element=';
    //                     showElements(element, title, id, detailLink, container);
    //                 })
    //             } else {
    //                 container.innerText = 'No results found';
    //             }
    //         } 

    //     })

    // }

  
    

    

});

