function repeat(operation, num) {
    // SOLUTION GOES HERE
  const array =[];
  for (let i = 0; i < num.length; i ++){
      array.push(operation(num[i]));
  }
  return array;
}
// const operation = i => Math.random(i);
const filledArray = [1, 3, 7];
repeat((operation) = i => Math.random(i), filledArray);


// // module.exports = repeat;