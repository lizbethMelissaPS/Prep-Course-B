// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
     var suma = 0;
    /*for(i=1; i<11 ;i++){
      suma = suma + elemento;
    }
    return suma;
     */
    /* while(suma < 11){
    suma = suma + i;
    i ++;
    }
    return suma; */

    /* for  of 
    NO ES TAN EFICIENTE EN CASO DE MAS NUMEROS */
    /*var arrayNumeros =[1,2,3,4,5,6,7,8,9,10]  
    for (const elementos of arrayNumeros) {
      suma = suma + elementos;
    }
    console.log("SUMA : "+ suma)
    return suma; */

    /* for  forEach ===> a que arreglos se le va aplicar
    para cada elemento del arreglo actualizar la variable suma
     con lo que vale dicho elemento  */
    var arrayNumeros =[1,2,3,4,5,6,7,8,9,10]; 
    arrayNumeros.forEach(elementos => {
      suma = suma + elementos;
    });
    return suma; 
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  /* var newArray =[] ;
  for(var i=0; i< array.length; i++){
    var residuo = array[i]%2;
    if (residuo==0) {
      newArray.push(array[i]);
    }
  } 
  return newArray;  */  
  /* elemento por elemento filtra */
  var numFiltrados = array.filter((elemento)=>elemento%2 === 0);
  return numFiltrados;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  /* var newArrayC =[] ; 
 for (let i = 0; i < array.length; i++) {
  const numCuadrado = array[i]**2;
  newArrayC.push(numCuadrado);
 }
 return newArrayC; */
 /* elemento por elemento  */
var numCuadrados= array.map((elemento)=>elemento**2);
return numCuadrados;

}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  /* var suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return suma; */

  /* anterior , posterior
  reduce devuelve un numero no un arreglo */
  var resultado = array.reduce((acomulardor, siguiente)=>acomulardor + siguiente);
  console.log("resultado"+ resultado);
  return resultado;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var numLength= num.toString().length;
  return numLength;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
