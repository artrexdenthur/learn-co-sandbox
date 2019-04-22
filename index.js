function outerFunction() {
  let innerVariable = "I'm sort of a secret.";
  
  return function innerScope() {
    let inaccessible = "Nothing can touch me.";
    
    return innerVariable;
  }
}

let myScope = outerFunction();

myScope();

