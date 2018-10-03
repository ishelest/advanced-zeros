module.exports = function getZerosCount(number, base) {

	let tempBase = base;
	let countOfZeros;
  for (let i = 2; i <= base; i++) {
    if (tempBase % i === 0) {
			
			let pow = 0;
      do {
				tempBase /= i;     
				pow++;
			} while (tempBase % i === 0)
			
			let count = 0;
			let tempNumber = number;
      while (tempNumber > 0) {
				tempNumber = Math.floor(tempNumber / i);
				count += tempNumber; 
      }
      countOfZeros = Math.floor(count / pow)
    }
  }
  return countOfZeros;
	
};





