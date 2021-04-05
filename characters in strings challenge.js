// Write function below
const subLength = (str, char) =>{
  let letterCount = 0;
  for (let i=0; i<str.length; i++) 
    {if (str[i] == char) 
      {letterCount ++;
    }
  };
 if (letterCount < 2 || letterCount > 2 ){
   return 0
   } else {
  return str.lastIndexOf(char) - str.indexOf(char) +1;
}
};
console.log(subLength('Cheesecake','k'))
