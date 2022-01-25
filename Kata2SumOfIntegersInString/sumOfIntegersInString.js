function sumOfIntegersInString(str) {
  // Code here
  let strArray = str.split(",");

  let sum = strArray.reduce(function (total, num) {
    if (typeof strArray[i] === "number") {
      return total + num;
    } else return total + 0;
  });
  return sum;
}

// split string
// sum all the integers
// ignore non integers
// use typeof?

export default sumOfIntegersInString;
