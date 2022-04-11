const formFirstName = document.querySelector('#firstName');
const formLastName = document.querySelector('#lastName');
const formEmail = document.querySelector('#email');
const formPassword = document.querySelector('#password');
const formFile = document.querySelector('#file');
const form= document.querySelector('.formularioRegistro');

formFirstName.addEventListener('blur', (e) => { 
    let feedback = document.querySelector('.firstNameFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El nombre es obligatorio'
    }
})

formFirstName.addEventListener('keyup', (e) =>{
    let feedback = document.querySelector('.firstNameFeed');
   let value = e.target.value 
    if(value.length <= 2){
        feedback.innerHTML = 'Debe tener al menos 2 caracteres.'
    }
    if(value.length > 1){
        feedback.innerHTML = ''
    }
 })

formLastName.addEventListener('blur', (e) => { 
    let feedback = document.querySelector('.lastNameFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El apellido es obligatorio'
    }
})

formLastName.addEventListener('keyup', (e) =>{
    let feedback = document.querySelector('.lastNameFeed');
   let value = e.target.value 
    if(value.length <= 2){
        feedback.innerHTML = 'Debe tener al menos 2 caracteres.'
    }
    if(value.length > 1){
        feedback.innerHTML = ''
    }
 })

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
        feedback.innerHTML = 'La contraseña en obligatoria'
    }
})

formPassword.addEventListener('keyup', (e) =>{
    let feedback = document.querySelector('.passwordFeed');
   let value = e.target.value  //ASI RECUPERO LO ESCRITO] 
    if(value.length <= 8){
        feedback.innerHTML = 'Debe tener al menos 8 caracteres.'
    }
    if(value.length > 7){
        feedback.innerHTML = ''
    }
 })


formFile.addEventListener('blur', (e) => {
    let feedback = document.querySelector('.fileFeed');
    let value = e.target.value
    let regex = /^.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF|jpeg|JPEG|png|PNG)$/
    if(!regex.test(value)){
        feedback.innerHTML = 'El fromato de la imagen debe ser jpg, jpeg, png o gif '
    }
    if(regex.test(value)){
        feedback.innerHTML = ''
    }
}) 

form.addEventListener('submit', (e) => {
   
    let error = false;
    if(formFirstName.value.length < 2){
        error = true;
        return error;
    }else if(formLastName.value.length < 2){
        error = true;
        return error;
    }else if(formEmail.value.length < 11){
        error = true;
        return error;
    }else if(formPassword.value.length < 9){
        error = true;
        return error;
    }
    if(!regex.test(formFile.value)){
        error = true;
        return error;
    } 

    if(error != true) {
        e.preventDefault();
        Swal.fire({title: "¡Felicidades, tu usuario ya fue creado!", icon: 'success'})
        .then(() => e.target.submit())
    }
}) 