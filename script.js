alert("Hola, bienvenido a mi portafolio personal");

const elemento = document.getElementById("titulo");


function cambiarTitulo() { 
    elemento.textContent = "Hola, este es mi portafolio personal";
}

function cambiarColor() { 
    elemento.style.color = "red";

}

function reiniciarTextoColor() {
    elemento.textContent = "Hola";
    elemento.style.color = "#af007b";

}

