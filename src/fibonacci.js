// Напиши функцию, которая при заданном числе n (n >= 1) возвращает n-е
// число в последовательности Фибоначчи.
// Например:
// nthFibo(4) вернёт 2
// Потому что 2 - это 4-е число в последовательности Фибоначчи.
// Для справки, первые два числа в последовательности Фибоначчи - 0 и 1, и
// каждое последующее число является суммой двух предыдущих.

// fibonacci sequence n = 1 is 0
// fibonacci sequence n = 4 is 2
// fibonacci sequence n = 10 is 34

function nthFibo(n) {
  if (n == 0) throw Error("invalid input");

  if (n <= 1) return n - 1;

  let prev = 0;
  let next = 1;
  let temp;

  for (let i = 2; i <= n - 1; i++) {
    temp = next;
    next = prev + next;
    prev = temp;
  }

  return next;
}

// testing
// console.log(`fibonacci sequence n = 0 is ${nthFibo(0)}`);
console.log(`fibonacci sequence n = 1 is ${nthFibo(1)}`);
console.log(`fibonacci sequence n = 2 is ${nthFibo(2)}`);
console.log(`fibonacci sequence n = 3 is ${nthFibo(3)}`);
console.log(`fibonacci sequence n = 4 is ${nthFibo(4)}`);
console.log(`fibonacci sequence n = 10 is ${nthFibo(10)}`);
