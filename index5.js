let inputString = "exemplo"; // String de entrada
let outputString = ""; // String de saída

// Itera a string de entrada de trás para frente, concatenando os caracteres na string de saída
for (let i = inputString.length - 1; i >= 0; i--) {
  outputString += inputString[i];
}

console.log(outputString); // Imprime a string de saída invertida