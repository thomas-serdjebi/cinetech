import showElements from './elements_script.js'

window.addEventListener("DOMContentLoaded", (event) => {

    
    //FILTER

    const sortBySelector = document.getElementById('sort_by');
    let sortBy = 'sort_by=popularity.desc&';
    //API CONST FOR URL
    const apiKey = "api_key=96815eea001b9c63c98ad5714bdd9c38" ;
    const baseUrl = "https://api.themoviedb.org/3/discover/tv?" ;
    const pageUrl = "&page=" ;
    let i = 1;
    let series ='';

    const container = document.getElementById('container');

    function getSeries(url) {

        fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data['results']);
           
            data['results'].forEach(element => {
                let title = element['name'];
                
                showElements(element, title)
                

            })
        })

    }

        
    for (let i = 1 ; i <=1 ; i++ ) {
        let series = baseUrl + sortBy + apiKey + pageUrl + i;
        getSeries(series);
    }

    
    sortBySelector.addEventListener('change', (event) => {

        container.innerHTML = '';

        switch(sortBySelector.value) {
            case 'From A to Z' : sortBy ="sort_by=original_title.asc&";
            break;
            case 'From Z to A' : sortBy ="sort_by=original_title.desc&";
            break;
            case 'Most recent' : sortBy ="sort_by=release_date.desc&";
            break;
            case 'Less recent' : sortBy ="sort_by=release_date.asc&";
            break;
            case 'More popular' : sortBy ="sort_by=popularity.desc&";
            break;
            case 'Less popular' : sortBy ="sort_by=popularity.asc&";
            break;
            case 'Top rated' : sortBy ="sort_by=vote_average.desc&";
            break;
            case 'Less rated' : sortBy ="sort_by=vote_average.asc&";
            break;

        }

        for (let i = 1 ; i <=1 ; i++ ) {
            series = baseUrl + sortBy + apiKey + pageUrl + i;
            getSeries(series);
        }

        
    })

})