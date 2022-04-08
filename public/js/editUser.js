const form= document.querySelector('#editUserForm');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    Swal.fire({title: "Sus cambios fueron guardados", icon: 'success'})
    .then(() => e.target.submit())
    })