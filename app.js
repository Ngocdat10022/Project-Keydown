const Key = document.querySelector('.card.key p:last-child')
const Location = document.querySelector('.card.location p:last-child')
const Which = document.querySelector('.card.which p:last-child')
const eCode = document.querySelector('.card.keycode p:last-child')

console.log(eCode);
const Alert =  document.querySelector('.alert');
const Box = document.querySelector('.box')

document.addEventListener('keydown', e=>{
    Alert.classList.add('hide')
    Box.classList.remove('hide')
    Key.innerText= e.keyCode
    Location.innerText=e.location
    Which.innerText=e.which
    eCode.innerText= 'Key:'+' '+e.key
})

const x = 4
const y = 4

console.log(const1);

