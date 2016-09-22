function bizarreSort(numbersArray) {
  // for loop
  // setTimeout
  // console.log
  for (var i = 0; i < numbersArray.length; i++) {
    // setTimeout( function() { console.log(numbersArray[i]) }, 10000);

    setTimeout( (function(number) { return function() { console.log(number); }; })(numbersArray[i]),
      (function(number) { return number; } )(numbersArray[i]) + 1000);
  }
  // could also use function(instance){}(i);
}

bizarreSort([77, 1, 60, 33, 76, 600, 0, 5]);