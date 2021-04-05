const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:


//Ooops - Here I correctly ordered a new array of numbers extracted from the object and then realised it wasn't what the question was asking for!
/*const sortSpeciesByTeeth = arr => {
let teethArray = arr.map(teeth => teeth.numTeeth)
console.log (teethArray);
return teethArray.sort((a, b) => a-b);
} 
*/

const sortSpeciesByTeeth = arr => arr.sort((a, b) => a.numTeeth>b.numTeeth)

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]


//Revision of sort function as a reminder
const sortYears = arr => arr.sort((a, b) => a-b);
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

