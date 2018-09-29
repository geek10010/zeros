module.exports = function getZerosCount(number) {
  let countFives = 0;

  for (let i = 1; 5 ** i <= number; i += 1) {
    countFives += Math.floor(number / (5 ** i));
  }

  return countFives;
};
