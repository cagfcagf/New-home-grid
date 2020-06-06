
// Muestra y oculta las preguntas frecuentes

function mostrarOcultar(Faq){
const elemento = document.getElementById(Faq);
const icon = document.getElementById('icon');
if(!elemento) {
return true;
}
if (elemento.style.display == "none") {
elemento.style.display = "block"
icon.classList.add('less');
} else {
elemento.style.display = "none"
icon.classList.remove('less');
};
return true;
};
