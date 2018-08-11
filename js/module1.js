var module = (function() {
  var privateVariable = 'privateVariable';

  function privateMethod() {
    return 1;
  }

  return {
    publicVariable: 'publicValue',
    publicMethod: function() {
      //return privateMethod();
      return this.privateMethod();
    }
  };
}());