'use strict';

const assert = require('assert');


// function forEach(arr, callback){
// ** method
// var arr1 = [1, 2, 3,]
// arr1.forEach(function(entry){
//   console.log(entry)
// })

// this is forEach function that iterates over each item in array with defined function. for each item
// in array dot length perform inputfunction
const forEach = (inputArray, inputFunction) => {
    for (let i = 0; i < inputArray.length; i++){
        inputFunction(inputArray[i]);

    }
};
//this is the array
const fullArray = [1, 2, 3];
// this is a function that uses fullArray as the argument and then console logs it as the function.
function funky(fullArray) {
    console.log(fullArray);
}
//calling fullArray and funky to run the forEach function logs the exact same thing as a forEach method
forEach(fullArray, funky);

// function map(arr, callback) {
//
// }
const map = (arg1, arg2) => {
  let nums = [];
  arg1.forEach(index => nums.push(arg2(index)));
  return nums;
};
const add2 = i => i+2;
const array = [1, 2, 3, 4];
map(array, add2);
// function filter(arr, callback) {
//   // Your code here
// }
const filter = (inpt , inFun) => {
    let arr1 = [];
    for (let i = 0; i < inpt.length; i++){
        if(inFun(inpt[i])) {
            arr1.push(inpt[i]);
        }
    }return arr1;
};
const filtArray = [1,2,3,4];
filter(filtArray, (x) => {
    return x > 2;
});
function some(arr, callback) {
  // Your code here
}

function every(arr, callback) {
  // Your code here
}

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
