
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
elemento.classList.add('animate__fadeIn');
} else {
elemento.style.display = "none"
icono.classList.remove('less');
};
return true;
};

function mostrarOcultarGrid(Faq, icon){
const elemento = document.getElementById(Faq);
const icono = document.getElementById(icon);
if(!elemento) {
return true;
}
if (elemento.style.display == "none") {
elemento.style.display = "grid"
icono.classList.add('less');
elemento.classList.add('animate__fadeIn');
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


function girarFlecha(line, name, rate, budgets, arrow) {
  document.getElementById(line).classList.toggle("travel-results-hidden");
  document.getElementById(name).classList.toggle("travel-results-hidden");
  document.getElementById(rate).classList.toggle("travel-results-hidden");
  document.getElementById(budgets).classList.toggle("travel-results-hidden");
  document.getElementById(line).classList.toggle("animate__fadeIn");
  document.getElementById(name).classList.toggle("animate__fadeIn");
  document.getElementById(rate).classList.toggle("animate__fadeIn");
  document.getElementById(budgets).classList.toggle("animate__fadeIn");
  document.getElementById(arrow).classList.toggle("turn-arrow");
}








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


function rotarFlechaMenu(address, arrow){
const direccion = document.getElementById(address);
const flecha = document.getElementById(arrow);
if(!direccion) {
return true;
}
if (direccion.style.display == "none") {
direccion.style.display = "block"
flecha.classList.add('rotar-menu');
direccion.classList.add('animate__fadeIn');
} else {
direccion.style.display = "none"
flecha.classList.remove('rotar-menu');
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

function travelerSelected(travelerbox, travelercheck){

const traveler = document.getElementById(travelercheck);

if (traveler.checked) {
    document.getElementById(travelerbox).style.backgroundColor = "rgba(235, 143, 0, 0.2)";
} else {
    document.getElementById(travelerbox).style.backgroundColor = "white";
}

};


function cardSelected(creditbox, debitbox, cardcheck){

const check = document.getElementById(cardcheck);

if (check.checked) {
    document.getElementById(creditbox).style.display = "grid";
    document.getElementById(debitbox).style.display = "none";
} else {
    document.getElementById(creditbox).style.display = "grid";
    document.getElementById(debitbox).style.display = "none";
}

};







// mostrar y ocultar formularios step 3

function ocultarStep3(plus, table, description){
  document.getElementById(plus).classList.toggle("form-plus");
  document.getElementById(table).classList.toggle("budget-hidden");
  document.getElementById(description).classList.toggle("budget-hidden");
  document.getElementById(table).classList.add("animate__fadeIn");
  document.getElementById(description).classList.add("animate__fadeIn");
}

function ocultarStep3V2(plus, table){
  document.getElementById(plus).classList.toggle("form-plus");
  document.getElementById(table).classList.toggle("budget-hidden");
  document.getElementById(table).classList.add("animate__fadeIn");
}

function ocultarMostrarOrder(arrow, field1, field2, field3, field4, field5, field6){
  document.getElementById(arrow).classList.toggle("account-arrow-rotate");
  document.getElementById(field1).classList.toggle("account-display-none");
  document.getElementById(field1).classList.add("animate__fadeIn");
  document.getElementById(field2).classList.toggle("account-display-none");
  document.getElementById(field2).classList.add("animate__fadeIn");
  document.getElementById(field3).classList.toggle("account-display-none");
  document.getElementById(field3).classList.add("animate__fadeIn");
  document.getElementById(field4).classList.toggle("account-display-none");
  document.getElementById(field4).classList.add("animate__fadeIn");
  document.getElementById(field5).classList.toggle("account-display-none");
  document.getElementById(field5).classList.add("animate__fadeIn");
  document.getElementById(field6).classList.toggle("account-display-none");
  document.getElementById(field6).classList.add("animate__fadeIn");

}
