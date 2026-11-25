/*SOLUCION DE EJERCICIO TIPO USUARIO*/

'use strict';

try{
    validarEdad(17);

}catch(e){
    console.error(e);   
}


function validarEdad(edad){
    if(edad < 0 ) throw "La edad debe ser positiva";
    if(!Number.isInteger(edad)) throw "Introduce la edad sin decimales";
    if(isNaN(edad)) throw "La edad introducida no es un número";

    if(edad < 18) {
        return "Menor de edad";
        
    }else if(edad >= 18 && edad <= 65){
        return "Trabajando o estudiando";
        
    }else if(edad > 65){
    
        return "Jubilado";
    }
} 
