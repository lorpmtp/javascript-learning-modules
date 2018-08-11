//The Namespace Created is "Module" 
//Namespaces places all the module's code into a Variable (Here Module) in order to avoid conflicts
//between variables placing them into the window Object
//The Inmediatly Invoked Self Executing Function will display the public Methods/Variables throught the
//"return" and hide the other proprieties.

var Module1 = (function() {
  var privateVariable = 'privateVariable';

  function privateMethod() {
    return 1;
  }

  return {
    publicVariable: 'publicValue',
    publicMethod: function() {
      //return privateMethod();
      console.log("context", this) // Retourne le contexte a l'intérieur du Return
      return privateMethod() * 2;
    }
  };
}());