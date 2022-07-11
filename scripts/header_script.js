window.addEventListener("DOMContentLoaded", (event) => {

    let searchForm = document.getElementById('form');
    let searchInput = document.getElementById('search');
    
    window.addEventListener('keypress', function(e) {

        if (e.key == 'Enter' && searchInput.value != '') {
            let url = 'search.php?search=' +searchInput.value;
            e.preventDefault();
            window.location.href= url;
            
        }
    })

    




});