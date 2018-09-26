module.exports = function getZerosCount(number) {
  let result=0;
  let factor=5
  while(number/factor>=1){
      result+=Math.floor(number/factor);
      factor*=5;
  }
  return result
}

