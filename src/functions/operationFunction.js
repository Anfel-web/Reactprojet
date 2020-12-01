// function somme (value1, value2) { return value1 + value2};
const somme = (value1, value2) => value1 + value2; // arrow function
// arrow function c'est une fonction avec une autre declaration 
// si on a un seul instruction on a pas besoin de faire return voir les exemples
const soustraction = (value1, value2) => {return value1 - value2 }; // arrow function

// === égalté ///////  !== difference 
const division = (value1, value2) => {
  // return value2 ===0 ? 0 : value1/value2;
  if (value2 ===0) return 0;
  const div = value1/value2;
  return div;
}; // arrow function
const multiplication = (value1, value2) => { return  value1*value2}; // arrow function

function operationFunction(operation,value1,value2){
  if (operation==="somme") {
    const som= somme(value1, value2)
    return som;
  } else if(operation==="soustraction") {
    const sous = soustraction(value1, value2)
    return sous;
  } else if (operation==="division"){
      const div = division(value1, value2)
     return div;
   } 
   //else { on peut utiliser le else mais vaut mieux de l'eviter 
       const mult = multiplication(value1, value2)
       return mult;
  // }
};

function operationFunctionWithSwich (operation, value1, value2) {
switch (operation) {
  case 'somme':
    const som= somme(value1, value2)
    return som;   
    break;
  case 'soustraction':
    const sous = soustraction(value1, value2)
    return sous;  
    break;
  case 'division':
    const div = division(value1, value2)
    return div;;
    break;
  default:
    const mult = multiplication(value1, value2)
    return mult;
}
}

export default operationFunctionWithSwich ;
