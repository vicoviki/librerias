const form = document.getElementById('form');

const nombreForm = document.getElementById('nombreForm');
const emailForm = document.getElementById('emailForm');
const telefonoForm = document.getElementById('telefonoForm');
const mensajeForm = document.getElementById('mensajeForm');

form.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
        e.preventDefault();

        const nombre = nombreForm.value;
        const email = emailForm.value;
        const telefono = telefonoForm.value;
        const mensaje = mensajeForm.value;



         console.log(nombre)
         console.log(email)
         console.log(telefono)
         console.log(mensaje)
    
};