module.exports = function getZerosCount(number) {
  let countFives = 0;
  let currentNum;
  //
  //console.log("number: "+ number);
  for (let i=5; i<=number; i = i + 5) {
    currentNum = i;
    while (currentNum !== 1 && currentNum % 5 === 0) {
      //
      //console.log("currentNum5: " + currentNum);
      countFives++;
      currentNum = Math.floor(currentNum / 5);
    }
  }
  return countFives;
}


/*
module.exports = function getZerosCount(number) {
  let countFives = 0;
  let currentNum;
  //
  //console.log("number: "+ number);
  for (let i=5; i<=number; i = i + 5) {
    currentNum = i;
    while (currentNum !== 1 && currentNum % 5 === 0) {
      //
      //console.log("currentNum5: " + currentNum);
      countFives++;
      currentNum = Math.floor(currentNum / 5);
    }
  }
  return countFives;
}

*/
