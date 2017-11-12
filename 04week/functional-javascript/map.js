// //Map with notes
let statics = [1,2,3,4];
function doubleAll(numbers) { // function doubleAll with argument numbers
  var result = []// result is empty array
  numbers.map(function(number) {//argument with map introducing a NEW function with number as another argument
  	result.push(number * 2);//push to empty array result with number *2
  });
  return result
}
console.log(statics)
doubleAll(statics)

// // module.exports = doubleAll;