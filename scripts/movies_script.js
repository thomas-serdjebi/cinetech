window.addEventListener("DOMContentLoaded", (event) => {

    //VARIABLES ---------------------------------------------------------------

    //API CONST FOR URL
    const apiKey = "api_key=96815eea001b9c63c98ad5714bdd9c38" ;
    const baseUrl = "https://api.themoviedb.org/3/" ;
    const mostPopularMoviesUrl = "discover/movie?sort_by=popularity.desc&";
    const mostPopularMovies = baseUrl + mostPopularMoviesUrl + apiKey;
    const imgUrl = "https://image.tmdb.org/t/p/w500";
    const main = document.getElementById('main');




    getMovies(mostPopularMovies);

    //FUNCTIONS


    function getMovies(url) {

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data['results']);
            showMovies(data['results']);
        })

    }

    function showMovies(data) {



        data.forEach(movie => {

            const movieDiv = document.createElement('div');
            const link = document.createElement('a');
            const movieLink = "details?movie="+movie['original_title'];
            link.href = movieLink;
            movieDiv.classList.add('movie');
            
            const movieImg = document.createElement("img");
            const posterUrl = imgUrl + movie['poster_path'] ;
            movieImg.setAttribute('src', posterUrl);
            movieImg.setAttribute('alt', "image");
            movieDiv.appendChild(movieImg);

            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-info');
            movieDiv.appendChild(movieInfo);

            let h3 = document.createElement('h3');
            const title = movie['original_title'];
            h3.innerText = title
            movieInfo.appendChild(h3);

            let span = document.createElement('span');
            span.classList.add(getColor(movie['vote_average']));
            span.innerHTML = movie['vote_average'];
            movieInfo.appendChild(span);

            const movieOverview = document.createElement('div');
            movieOverview.classList.add('overview');
            movieInfo.appendChild(movieOverview);
            let text = movie['overview'] + "<br>" + "<br>" + "<a href='" + movieLink + "'><span class='bold'>Read More</span></a>" ;
            console.log(text)
            movieOverview.innerHTML = text;

            
            main.append(movieDiv)

        })

    }

    function getColor(vote) {
        if(vote >= 8) {
            return 'green'
        }else if (vote >=5){
            return "orange"
        } else {
            return 'red'
        }
         
    }


});