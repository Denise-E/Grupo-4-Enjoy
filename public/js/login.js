const formEmail = document.querySelector('#email');
const formPassword = document.querySelector('#password');
const form= document.querySelector('#loginForm');
const emailError = document.querySelector('#emailErrorP');


formEmail.addEventListener('blur', (e) => { 
    let feedback = document.querySelector('.emailFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El email es obligatorio'
    }
})

formPassword.addEventListener('blur', (e) => { 
    let feedback = document.querySelector('.passwordFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'La contraseña es obligatoria'
    }
})


form.addEventListener('submit', (e) => {
    /*
    let error = false;
    if(formEmail.value.length < 11){
        error = true;
        return error;
    }else if(formPassword.value.length == 0){
        error = true;
        return error;
    }

    if(error == true) {
        e.preventDefault();
    }else{
        */
        Swal.fire({title: "Bienvenido a Enjoy!", icon: 'success'})
        .then(() => e.target.submit())
        }
   // })

