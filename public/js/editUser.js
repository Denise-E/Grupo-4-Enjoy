const form= document.querySelector('#editUserForm');
const formFirstName = document.querySelector('#firstName');
const formLastName = document.querySelector('#lastName');
const formEmail = document.querySelector('#email');
const formPassword = document.querySelector('#password');
const formFile = document.querySelector('#file');

form.addEventListener('submit', (e) => {
   /*
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
    }if(!regex.test(formFile.value)){
        error = true;
        return error;
    }

    if(error == true) {
        e.preventDefault();
    }else{ */
        e.preventDefault();
        Swal.fire({title: "Sus cambios fueron guardados", icon: 'success'})
        .then(() => e.target.submit())
    }
// })