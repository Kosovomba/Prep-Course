// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var objetoPropiedades = Object.keys(objeto)
  var objetoMatriz = []
  for(i = 0; i < objetoPropiedades.length; i++) {
    objetoMatriz[i] = [objetoPropiedades[i], objeto[objetoPropiedades[i]]]
  }
  return objetoMatriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {}
  for (i = 0; i < string.length; i++) {
    var objetoPropiedades = Object.keys(objeto)
    var a = 1
    var n = string[i]
    var h = 0
    for (m = 0; m < objetoPropiedades.length; m++){
      if(n == objetoPropiedades[m])
      h = h + 1
    }
    if (h == 0) {
      for (j = i + 1; j < string.length; j++) {
        if (n == string[j]) {
          a = a + 1
        }
      }
      objeto[n] = a
    }
  }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numero2 = numero.toString();
  let a = 0;
  for (i = 0; i < Math.trunc(numero2.length/2); i++) {
    if (numero2[i] == numero2[numero2.length - i - 1]) {
      a = a + 1
    }
  }
  if (Math.trunc(numero2.length/2) == a) {
    return "Es capicua"
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  for(i = 0; i < cadena.length; i++) {
    if(cadena[i] == 'a'|| cadena[i] == 'b' || cadena[i] == 'c'){
      cadena = cadena.replace(cadena[i], '')
      i = i - 1
    }
  }
  return cadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3 = []
  for(i = 0; i < arreglo1.length; i++) {
    var a = 0
    for(j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] == arreglo2[j]){
        a = a + 1
      }
    }
    if(a > 0) {
      arreglo3.push(arreglo1[i])
    }
  }
  return arreglo3
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

