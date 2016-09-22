function map(array, func) {
  return array.map(func);
}

var myArray = map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });

console.log(myArray);