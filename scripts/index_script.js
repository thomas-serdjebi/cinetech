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

    //FORMS ERROR 

    let fieldsCond = document.getElementById('fields_condition');
    let loginCond = document.getElementById('login_conditions');
    let passwordCond= document.getElementById('password_conditions');
    let passwordConfCond= document.getElementById('password_conf_conditions');

    let signUpLogin = document.getElementById('signuplogin');
    let signUpPassword = document.getElementById('signuppassword');
    let passwordConfirm = document.getElementById('passwordconfirm');

    

    signUpLogin.addEventListener('change', (event) => {
        if (signUpLogin.value.length == 0 ) {
            fieldsCond.className = ''
            fieldsCond.classList.add('mb-4', 'text-danger', 'font-weight-bold')
        } else if (signUpLogin.value.length <6 ) {
            loginCond.className = ''
            loginCond.classList.add('mb-4', 'text-danger', 'font-weight-bold')
        } else if (signUpLogin.value.match(/[^A-Za-z0-9]/i)){
            loginCond.className = ''
            loginCond.classList.add('mb-4', 'text-danger', 'font-weight-bold')
        } else {
            loginCond.className = ''
            loginCond.classList.add('mb-4', 'text-success', 'font-weight-bold')

        }
    })

    signUpPassword.addEventListener('change', (event) => {
        if (signUpPassword.value.length == 0 ) {
            fieldsCond.className = ''
            fieldsCond.classList.add('mb-4', 'text-danger', 'font-weight-bold')
        } else if (signUpPassword.value.length < 8 ) {
            passwordCond.className = ''
            passwordCond.classList.add('mb-4', 'text-danger', 'font-weight-bold')
        } else if (signUpPassword.value.length >= 8 && signUpPassword.value.match(/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]/)) {
            passwordCond.className = ''
            passwordCond.classList.add('mb-4', 'text-success', 'font-weight-bold')
           
        }
    })






    

    

    
   




    



    




});