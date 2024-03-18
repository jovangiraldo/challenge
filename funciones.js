let resultado = document.querySelector('#resultado');
let mensaje = document.querySelector('#textoarea');
let encriptar = document.querySelector("#encriptarBtn");
let desencriptar = document.querySelector("#desencriptarBtn");

// Función para encriptar un mensaje usando el cifrado César
function encriptarMensaje(texto, clave) {
    let mensajeEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        // Solo encripta letras
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            let encriptado = (charCode - 65 + clave) % 26 + 65; // Aplica el cifrado César
            mensajeEncriptado += String.fromCharCode(encriptado);
        } else {
            mensajeEncriptado += texto[i];
        }
    }

    return mensajeEncriptado;
}

// Función para desencriptar un mensaje en el cifrado César
function desencriptarMensaje(textoEncriptado, clave) {
    let mensajeDesencriptado = '';

    for (let i = 0; i < textoEncriptado.length; i++) {
        let charCode = textoEncriptado.charCodeAt(i);

        // Solo desencripta letras
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            let desencriptado = (charCode - 65 - clave + 26) % 26 + 65; // Deshace el cifrado César
            mensajeDesencriptado += String.fromCharCode(desencriptado);
        } else {
            mensajeDesencriptado += textoEncriptado[i];
        }
    }

    return mensajeDesencriptado;
}

// Evento de clic para encriptar
encriptar.addEventListener('click', () => {
    let clave = 3; // Puedes ajustar la clave según tus necesidades
    let mensajeEncriptado = encriptarMensaje(mensaje.value, clave);
    resultado.value = mensajeEncriptado;
});

// Evento de clic para desencriptar
desencriptar.addEventListener('click', () => {
    let clave = 3; // Debes usar la misma clave que usaste para encriptar
    let mensajeDesencriptado = desencriptarMensaje(resultado.value, clave);
    mensaje.value = mensajeDesencriptado;
});


