let heart = document.querySelector('.corazon');
let btn = document.querySelector('#heartBtn')

heart.addEventListener('click', () => {
    btn.innerHTML = '<i class="fas fa-heart corazon"></i>'
})