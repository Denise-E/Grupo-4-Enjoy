const formEmail = document.querySelector('#email');
const formPassword = document.querySelector('#password');


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