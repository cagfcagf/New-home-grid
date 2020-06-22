
// Muestra y oculta las preguntas frecuentes
bottom-line
function mostrarOcultar(Faq, icon, line){
const elemento = document.getElementById(Faq);
const icono = document.getElementById(icon);
if(!elemento) {
return true;
}
if (elemento.style.display == "none") {
elemento.style.display = "block"
icono.classList.add('less');
elemento.classList.add('animate__fadeIn');
} else {
elemento.style.display = "none"
icono.classList.remove('less');
};
return true;
};




function rotarFlecha(address, arrow){
const direccion = document.getElementById(address);
const flecha = document.getElementById(arrow);
if(!direccion) {
return true;
}
if (direccion.style.display == "none") {
direccion.style.display = "block"
flecha.classList.add('rotar');
direccion.classList.add('animate__fadeIn');
} else {
direccion.style.display = "none"
flecha.classList.remove('rotar');
};
return true;
};
