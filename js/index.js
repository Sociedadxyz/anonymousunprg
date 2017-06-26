//Variabless
var $logoOne=document.getElementById("logoOne"); 

//Funciones
function entrada(){
	$logoOne.src="img/logo-2.gif";
}	
function salida(){
	$logoOne.src="img/logo-1.gif";
}

//Eventos
$logoOne.addEventListener("mouseover",entrada);
$logoOne.addEventListener("mouseout",salida)