
function mostrarOcultar(Faq){
var elemento = document.getElementById(Faq);
if(!elemento) {
return true;
}
if (elemento.style.display == "none") {
elemento.style.display = "block"
} else {
elemento.style.display = "none"
};
return true;
};
