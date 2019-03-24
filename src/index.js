module.exports = function getZerosCount(number, base) {
  let zeroCount = 0;
  let factNum = factorial(number).toString(base);
  for( let i = 0; i < factNum.length; i++){
    if(factNum[i] == 0){
      zeroCount++;
    }else{
      continue;
    }
  }
  return zeroCount;
}

function factorial(n){
  return n ? n * factorial(n - 1) : 1;
}