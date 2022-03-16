const createForm = document.querySelector('#createProductForm');

const fieldName = document.querySelector('#name');
const fieldDescription = document.querySelector('#description');
const fieldFile = document.querySelector('#file'); 

fieldName.addEventListener('blur', (e) => { 
    let feedback = document.querySelector('.nameFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El nombre es obligatorio'
    }

})
 fieldName.addEventListener('keydown', (e) =>{
    let feedback = document.querySelector('.nameFeed');
   let value = e.target.value  //ASI RECUPERO LO ESCRITO] 
    if(value.length < 4){
        feedback.innerHTML = 'Debe tener al menos 5 caracteres.'
        // Chequear que no se vea dos veces al enviar form !!!
    }
    if(value.length >= 4){
        feedback.innerHTML = ''
    }

 })

 fieldDescription.addEventListener('keydown', (e) => {
     let feedback = document.querySelector('.descriptionFeed');
     let value = e.target.value
     if(value.length < 19){
        feedback.innerHTML = 'Debe tener al menos 20 caracteres.'
        // Chequear que no se vea dos veces al enviar form !!!
    }
    if(value.length >= 19){
        feedback.innerHTML = ''
    }
 })


fieldFile.addEventListener('blur', (e) => {
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