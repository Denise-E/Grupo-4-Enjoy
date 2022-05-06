let plus = document.querySelector('.fa-plus');
let minus = document.querySelector('.fa-minus');
let input = document.querySelector('#quantity')


plus.addEventListener('click', () => {
    input.value ++
})

minus.addEventListener('click', () => {
    if(input.value > 0) {
        input.value --
    }
})
