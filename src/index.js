module.exports = function getZerosCount(number) {
  let countFives = 0;
  let currentNum;
  
  /*
  for (let i=5; i<=number; i = i + 5) {
    currentNum = i;
    while (currentNum !== 1 && currentNum % 5 === 0) {
      //
      //console.log("currentNum5: " + currentNum);
      countFives++;
      currentNum = Math.floor(currentNum / 5);
    }
  }
  */

  // mad idea - go faster! :)
  let powerFive = Math.floor(Math.log(number) / Math.log(5));
  for (let i=1; i<=powerFive; i++) {
    countFives += Math.floor(number / 5 ** i);
  }
  
  return countFives;
}
