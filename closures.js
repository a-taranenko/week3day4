'use strict';

// for (var i = 0; i < 3; i++) {
//   setTimeout( (function (counter) {
//     return function() { console.log(counter); };
//     })(i), 1000 + i);
//   // myTimer(i);
// }



// function myTimer(counter) {
//   setTimeout(function() { console.log(counter); }, 1000 + counter);
// }

for (var i = 0; i < 3; i++) {
  setTimeout(myFunc(i), 1000 + i);
}

function myFunc(counter) {
  return function() { console.log(counter); };
}