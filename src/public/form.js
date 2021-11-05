const form = document.querySelector('#myform');
const title = document.querySelector('#title');
const message = document.querySelector('#message');
const destino = document.querySelector('#destino');
const imagen = document.querySelector('#imagen');

form.addEventListener('submit', e => {
   e.preventDefault();
    fetch('/new-message',{
        method:'POST',
        body:JSON.stringify({
            title:title.value,
            message:message.value,
            destino:destino.value,
            imagen:imagen.value
        }),
        headers:{
            'Content-Type':'application/json'
        }
    });
    form.reset();
})