var pantalla = document.querySelector("#display");
function press(element){
    if(pantalla.innerHTML==="0"){
        pantalla.innerHTML=element;   
    }else{
        pantalla.innerHTML+=element;   
    }
}
function clr() {
    pantalla.innerHTML=0;
}
function setOP(element){
    pantalla.innerHTML+=element; 
}
function calculate(){
    let contenido = pantalla.innerHTML;
    if(contenido.includes("*") ||
       contenido.includes("/") ||
       contenido.includes("+") ||
       contenido.includes("-")){
        pantalla.innerHTML=eval(contenido);
     }
}

/*
Función Eval.
Fuentes: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/eval
*/