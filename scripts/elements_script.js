export default function showElements(element, title, id, detailLink) {

    function getColor(vote) {
        if(vote >= 8) {
            return 'green'
        }else if (vote >=5){
            return "orange"
        } else {
            return 'red'
        }
            
    }


    const imgUrl = "https://image.tmdb.org/t/p/w500";


    const elementDiv = document.createElement('div');
    const link = document.createElement('a');
    const elementLink = detailLink + element.id;
    link.href = elementLink;
    elementDiv.classList.add('movie');
    elementDiv.id=element.id;

    
    const elementImg = document.createElement("img");
    let posterUrl = '';

    if(element['poster_path'] != null ) {
        posterUrl = imgUrl + element['poster_path']
    } else {
        posterUrl = 'assets/unavailable.jpg'
    }
    elementImg.setAttribute('src', posterUrl);
    elementImg.setAttribute('alt', "image");
    elementDiv.appendChild(elementImg);



    const elementInfo = document.createElement('div');
    elementInfo.classList.add('movie-info');
    elementDiv.appendChild(elementInfo);

    let h3 = document.createElement('h3');
    h3.classList.add('movie_title');
    h3.innerText = title
    elementInfo.appendChild(h3);

    let span = document.createElement('span');
    span.classList.add(getColor(element['vote_average']));
    span.innerHTML = element['vote_average'];
    elementInfo.appendChild(span);

    const elementOverview = document.createElement('div');
    elementOverview.classList.add('overview');
    elementInfo.appendChild(elementOverview);
    
    let text = element['overview']  + "<br>" + "<br>" + "<a href='" + elementLink + "'><span>Read More</span></a>" ;

    elementOverview.innerHTML = text;

    
    container.append(elementDiv)

    

}












