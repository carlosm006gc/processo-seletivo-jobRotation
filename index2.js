const num = 233;
let fib_prev = 0;
let fib_atual = 1;
while (fib_atual < num) {
  const fib_prox = fib_prev + fib_atual;
  fib_prev = fib_atual;
  fib_atual = fib_prox;
}
if (fib_atual === num) {
  console.log(num + " pertence à sequência de Fibonacci");
} else {
  console.log(num + " não pertence à sequência de Fibonacci");
}