const editForm = document.querySelector('#editProductForm');

// CAMBIARLOS A EDITFORM.NAME XQ SINO ME VA A CHOCAR CON 
// LOS DEL PROXIMO FORMULARIO o solso declarar nuevo form y listo.

const fieldName = document.querySelector('#name');
const fieldDescription = document.querySelector('#description');
// formato jpg, jpeg,png o gif / con regex ? exprecion regular 22:35
const fieldFile = document.querySelector('#file'); 

//NO FUNCIONAAAAAA
fieldName.addEventListener('keyup', (e) => { 
    let feedback = document.querySelector('.nameFeed');
    let value = e.target.value
    if(value == 0){
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



