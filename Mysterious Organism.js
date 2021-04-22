// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//Factory function 
let percShared = 0;
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
    let randElementNum = Math.floor(Math.random()*this.dna.length);
    let newElement='';
    do {
      newElement = returnRandBase();
    }
    while (newElement === this.dna[randElementNum])
    this.dna[randElementNum] = newElement;
    return this.dna;
    },
    compareDNA(pAequorObj) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
      this.dna[i] === pAequorObj.dna[i] ? count +=1:false; 
        }
      percShared = Math.round((count*2/(this.dna.length + pAequorObj.dna.length))*100)
      return (`specimen #${this.specimenNum} and specimen #${pAequorObj.specimenNum} have ${percShared}% DNA in common`)
    },
    willLikelySurvive(){
     let CGCount = 0;
     this.dna.forEach(e => e === 'C' || e ==='G'? CGCount +=1:false);
     return Math.round((CGCount/this.dna.length)) >=.6 ? true: false;
    },
    complementStrand(){
        console.log(this.dna);
        return console.log(this.dna.map(e => {
        switch(true) {
          case e==='A':
          return 'T';
          break;
           case e==='T':
          return 'A';
          break;
           case e==='C':
          return 'G';
          break;
           case e==='G':
          return 'C';
          break;
        }
      }))
    }
  }
};

const test1 = pAequorFactory(1,mockUpStrand())
//test1.mutate();
//test1.complementStrand();

//console.log(test1.dna)
const test2 = pAequorFactory(2,mockUpStrand())
//console.log(test2.dna)
//console.log(test1.compareDNA(test2))
//console.log(test1.willLikelySurvive());

//Function that pushes 30 trial specimens to an array
const PAequor30Trial = [];
const create30Trial = () =>{
let i = 0;
let j = 1;
do {
  let pAequorObj = (pAequorFactory(j,mockUpStrand()));
  if (pAequorObj.willLikelySurvive() === true) {
    PAequor30Trial.push(pAequorObj); 
    //PAequor30Trial.push(pAequorObj.willLikelySurvive())
    j++;
  }
    i++;
} while (j<31);
};

create30Trial();
//console.log(PAequor30Trial)

//Function that returns an array of objects containing the highest shared percentage of DNA
const findClosestMatch =(arr)=>{
const matchArray = [];
let arr2 = [...arr];
    arr2.reverse();
for (let i=0; i<arr.length-1; i++){
  for (let j=0; j<arr2.length-(i+1); j++){
  arr[i].compareDNA(arr2[j]);
  matchArray.push({specimenNum1:arr[i].specimenNum, specimenNum2:arr2[j].specimenNum, percShared:percShared})
  }
 } 
 //console.log(matchArray)
let closestMatchArray = matchArray.sort((a,b) => b.percShared-a.percShared)
return console.log(closestMatchArray.filter(e=> e.percShared === closestMatchArray[0].percShared));
}
findClosestMatch(PAequor30Trial)
//OUTPUT array of objects containing the specimen matches with the highest shared percentage of DNA


 
