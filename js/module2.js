(function(Module2) {

	// All privates

	var privateVariable = 'privateValue';

	function privateMethod() {
	  	return 4;
	}

	// All Publics

  	Module2.publicVariable = 'publicValue';
  	Module2.publicMethod1 = function() {
  		console.log('Contexte Module 2 - publicMethod', this);
  		console.log("Module 2 - Sous Module - publicMethod result : " + privateMethod() * 5);
	}

})(window.Module2 = window.Module2 || {});