
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
elemento.classList.add('animate__slideInDown');
} else {
elemento.style.display = "none"
icono.classList.remove('less');
};
return true;
};

// mostrar y ocultar formularios

function ocultarForm(Form, icon){
const elemento = document.getElementById(Form);
const icono = document.getElementById(icon);
if(!elemento) {
return true;
}
if (elemento.style.display == "none") {
elemento.style.display = "grid"
icono.classList.remove('form-plus');
elemento.classList.add('animate__fadeIn');
} else {
elemento.style.display = "none"
icono.classList.add('form-plus');
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


// Pinta de naranjo el fondo de un viajero seleccionado

function travelerSelected(travelerbox, travelercheck){

const traveler = document.getElementById(travelercheck);

if (traveler.checked) {
    document.getElementById(travelerbox).style.backgroundColor = "rgba(235, 143, 0, 0.2)";
} else {
    document.getElementById(travelerbox).style.backgroundColor = "white";
}

};
