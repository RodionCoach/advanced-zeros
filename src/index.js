module.exports = function getZerosCount(number, base) {
  let zeroCount = 0;
  eratosfen(base);
  return zeroCount;
}

function eratosfen(n) {
  let arr = [];

  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  let p = 2;

  do {
    for (i = 2 * p; i <= n; i += p) {
      arr[i] = 0;
    }

    for (i = p + 1; i <= n; i++) {
      if (arr[i]) break;
    }

    p = i;
  } while (p * p < 100);
  
  return arr.filter((el) => !!el);
}
console.log(eratosfen(22))
