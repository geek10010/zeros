module.exports = function getZerosCount(number) {
  let countFives = 0;
  const powerFive = Math.floor(Math.log(number) / Math.log(5));

  for (let i = 1; i <= powerFive; i++) {
    countFives += Math.floor(number / (5 ** i));
  }

  return countFives;
};
