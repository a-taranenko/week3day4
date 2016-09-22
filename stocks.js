function maxProfit(stockArray) {
  var highestProfit = -1;
  var profits = [];
  var difference = 0;

  for (var i = 0; i < stockArray.length - 1; i++) {
    for (var g = i + 1; g < stockArray.length; g++) {
      if (stockArray[g] - stockArray[i] > difference) {
        difference = stockArray[g] - stockArray[i];
      }
    }

    if (difference == 0) {
      difference = -1;
    }

    profits.push(difference);
    difference = 0;
  }

  profits.forEach((element) => {
    if (element > highestProfit) {
      highestProfit = element;
    }
  });

  return highestProfit;
}

pricesArray = [45, 24, 35, 31, 40, 38, 11];

console.log(maxProfit(pricesArray));