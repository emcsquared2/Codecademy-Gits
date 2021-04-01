const numbers = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num

//This would be the function WITHOUT using a parameter for the array
const squareNums1 =() => 
  numbers.map(n => n*n);
console.log(squareNums1());

//(ARROW FUNCTIONS ES6) Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword. If you put the {} braces around the 'doing' bit of the function , then you need {return number*number}.  In the case of {number*number} will output undefined.


//This is the function that takes in the array as a parameter
const squareNums2 = arr =>
  arr.map(n => n*n)
console.log(squareNums2(numbers));


//Or even more neatly by using the toSquare function...
const squareNums3 = arr => arr.map(toSquare);
console.log(squareNums3(numbers))



const squareNums4 = numbers.map(n => n*n);
console.log(squareNums4)


