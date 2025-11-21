//Ejercicio 1
function concatenar(text1, text2) {
  return text1 + text2;
}
console.log(concatenar("Concatenar ", "test"));

//Ejercicio 2
function backLongitud(text1) {
  return text1.length;
}
console.log(backLongitud("Devolver"));

//Ejercicio 3
function backUpperCase(text1) {
  return text1.toUpperCase();
}
console.log(backUpperCase("Bonjour"));

//Ejercicio 4
function backLowerCase(text1) {
  return text1.toLowerCase();
}
console.log(backLowerCase("BONJOUR"));

//Ejercicio 5
function characterPosition(text1, index) {
  return text1[index];
}
console.log(characterPosition("hola", 3));

//Ejercicio 6
function invertLetters(text1) {
  return text1.split("").reverse().join("");
}
console.log(invertLetters("hola"));

//Ejercicio 7
function calculateQuantityCharacters(text1, character) {
  let count = 0;
  for (let index = 0; index < text1.length; index++) {
    if (text1[index] === character) {
      count++;
    }
  }
  return count;
}
console.log(calculateQuantityCharacters("banana", "a"));
