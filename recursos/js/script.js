let boton = document.querySelector('#modoOscuro')
let body = document.querySelector('body')


//Moficiar el evento del boton
boton.onclick = function(){
    
    body.classList.toggle('dark')
}