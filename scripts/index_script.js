window.addEventListener("DOMContentLoaded", (event) => {

    //Removing the signUp form if the user just registered;

    const signUpForm = document.getElementById('signupform');
    const or = document.getElementById('or');
    const leftBlock = document.getElementById('left_block');
    var get = $_GET('display');

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

    if(get == 'only_signin') {
        signUpForm.remove();
        or.remove();
        let message = document.createElement('div');
        message.classList.add('title3');
        message.innerText = ' You are now registered. Just sign in !';
        leftBlock.appendChild(message);

    }

    

    
   




    



    




});