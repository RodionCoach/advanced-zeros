module.exports = function getZerosCount(numb, base) {
  let zeroCount = [],
    count = 0,
    title = 0,
    sum = 0,
    pow = 0,
    objNumb = new Map();
    simpleNumbs = eratosfen(base);
  for (let i = 0; i < simpleNumbs.length; i++) {
    while(base % simpleNumbs[i] === 0){
      base /= simpleNumbs[i];
      objNumb.set(simpleNumbs[i], ++count);
    }
      if(base === 1) break;
      count = 0;
  }
  
  for(let kv of objNumb){
    console.log(kv)
    do{
      title = Math.floor(numb / Math.pow(kv[0], ++pow));
      sum += title;
    }while(title > 0);
    zeroCount.push(Math.floor(sum / kv[1]));
    sum = 0;
    pow = 0;
  };
  zeroCount.sort((a, b) => a - b);
  return zeroCount[0];
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