(function(Module2) {

	// All privates

  var privateVariable = 'privateValue';


  function privateMethod() {
  	return 4;
  }


  // All Publics


  Module2.publicVariable = 'publicValue';

  Module2.publicMethod = function() {
  	console.log('context', this);
  	return privateMethod() * 5;
  };

})(window.Module2 = window.Module2 || {});