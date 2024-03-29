const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val, val2) => {
    let firstTry = func(val);
    let secondTry = func(val2);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

console.log(checkConsistentOutput(addTwo, 10, 20));


/*-------My Stuff-----------*/
function countUpTo(){
for (let counter = 0; counter < 5; counter++) {
 console.log(counter);
}
};



const timeFuncRuntime2 = funcParameter => {
  let t1 = Date.now();
  console.log(t1);
  funcParameter();
  let t2 = Date.now();
  console.log(t2);
  let runtime = t2 - t1;
  console.log(runtime);
};

timeFuncRuntime(countUpTo);
