
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");        
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400); 

 var indice =0;

function disenharCircunferencia(x,y,radio){
    
    let color =  ["blue", "red", "orange", "yellow"]

    pincel.fillStyle = color[indice];
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();

        indice++;

            if(indice>4){indice=0;}

}    

function limpiarPantalla(){

    pincel.clearRect(0,0,600,400);

}



var x = 0

function actualizarPantalla(){

    limpiarPantalla();
    disenharCircunferencia(x,20,10);
    x++;
}

setInterval(actualizarPantalla,100);


