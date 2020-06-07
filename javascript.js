
// Muestra y oculta las preguntas frecuentes

function mostrarOcultar(Faq, icon){
const elemento = document.getElementById(Faq);
const icono = document.getElementById(icon);
if(!elemento) {
return true;
}
if (elemento.style.display == "none") {
elemento.style.display = "block"
icono.classList.add('less');
} else {
elemento.style.display = "none"
icono.classList.remove('less');
};
return true;
};
