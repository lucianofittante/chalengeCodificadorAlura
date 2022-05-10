// variables para escuchar los botones


    var botonEncriptar = document.querySelector(".boton-codi");
    var botonDesencriptar = document.querySelector(".boton-deco");
    var botoncopiar = document.querySelector(".boton-copiar");
   
 
    var mensaje = document.querySelector("#mensajes"); 
    var variableglobaltexto;

    const barra = document.querySelector('.barra-lateral');
    const cajaEntrada = document.querySelector('.caja-entrada');


// funcion para encriptar la caja de entrada
          
     function encriptar(strignparaencriptar) {

                let matrizcodigo = [["e", "enter"],["i", "ines"],["a","ai"],["o", "ober"],["u","ufat"]]
    
                   strignparaencriptar =  strignparaencriptar.toLowerCase();
    
                        for (let i=0; i<matrizcodigo.length; i++){
    
                            if(strignparaencriptar.includes(matrizcodigo[i][0])){
    
                                strignparaencriptar = strignparaencriptar.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
                            }
    
                        }
                return strignparaencriptar;

            }
    // funcion para desencriptar 

     function desencriptar(strignparadesencriptar) {

                let matrizcodigo = [["enter","e"],["ines","i"],["ai","a"],["ober","o"],["ufat","u"]]
    
                strignparadesencriptar =  strignparadesencriptar.toLowerCase();
    
                        for (let i=0; i<matrizcodigo.length; i++){
    
                            if(strignparadesencriptar.includes(matrizcodigo[i][0])){
    
                                strignparadesencriptar = strignparadesencriptar.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
                            }  
                        }
                return strignparadesencriptar;
            }

// que hacer al capturar el boton de encriptado
        botonEncriptar.addEventListener("click",function(event){
            event.preventDefault();
            const textoencriptado = encriptar(cajaEntrada.value);
            var texto = document.querySelector('#caja-salida');
            texto.textContent = textoencriptado;
            variableglobaltexto=textoencriptado;
            mensaje.remove();

        });

// que hacer al capturar el boton de desencriptado
        botonDesencriptar.addEventListener("click",function(event){
            event.preventDefault();
            const textodesencriptado = desencriptar(cajaEntrada.value);
            var textodes = document.querySelector('#caja-salida');
            textodes.textContent= textodesencriptado;
            variableglobaltexto = textodesencriptado;

            console.log(cajaEntrada.textContent);
           
        });

// Que hacer al apretar el boton copiar
        botoncopiar.addEventListener("click",function(event){
            event.preventDefault();
            cajaEntrada.value = variableglobaltexto;
            var texto = document.querySelector('#caja-salida');
            texto.textContent = "";
            alert('se copio a la caja de entrada');
       
        });



