console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Jo'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(23,77));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1,num2,num3){
return num1 * num2 * num3;
}
console.log(multiplyThree(3,13,23));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
};
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0){
    return array[array.length-1];
  } else {
    return 'undefined';
  }
};
console.log(getLast([10,20,30,40]));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let i=0; i<array.length; i++){
    if (array[i] === value){
      return true;
    }
  } return false;
};
console.log(find(731,[1,731,3]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter){
    return true;
  } else {
    return false;
  }
};

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (let el of array){
    sum += el;
  }
  return sum;
};
console.log(sumAll([5,10,15,20,50]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function getPositives(ar){
  const posArr = ar.filter(num => num > -1)
  return posArr;
}
console.log(getPositives([1,2,-3,4,5,-6,7,8,-9,10]));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
// Function to add up the numbers from a single numbers
// Example, 4 would output 10. 1 + 2 + 3 + 4 = 10.
const addUp = (n) => {
  if (n < 0 || typeof(n) !== "number"){
    return "Enter any positive number between 1 and 1000";
  } else {
    let a = 0;
    let b = 1;

    for (let i = 0; i<n; i++){
      a += b
      b += 1;
    } return a;
  }
};
console.log(addUp(10));
