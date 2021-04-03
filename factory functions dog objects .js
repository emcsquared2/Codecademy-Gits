// Write your code here:

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,

  get name(){
    return this._name;
  },
  get breed(){
    return this._breed;
  },
  get weight(){
    return this._weight;
  },
  set name(nameIn){
    this._name = nameIn;
  },
  set breed(breedIn){
    this._breed = breedIn;
  },
  set weight(weightIn){
    this._weight = weightIn;
  },
  bark(){
    return "ruff! ruff!"
  },
  eatTooManyTreats(){
    return this.weight++
  }
}
};


const labrador = dogFactory("Rex", "Labrador", 28);
console.log(labrador);
labrador.eatTooManyTreats();
console.log(labrador.bark());
console.log(labrador.name);
console.log(labrador.weight);

console.log("------------------------------------")
console.log(dogFactory('Joe', 'Pug', 27));

// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
