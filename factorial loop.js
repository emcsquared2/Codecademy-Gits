// Write function below
const factorial = num => {
  for (let i= num-1; i>0; i--) {
   num = num*i;
   }
  return num
 };

console.log(factorial(5));
