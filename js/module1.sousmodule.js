var Module1 = Module1 || {};

Module1.SousModule = (function(){

	var privateVariable = 'Private Variable';

	function privateMethod() {

	}

    return {
    	publicMethod: function(){
        // fonctions à ajouter au module
        	return "Sous Module - Module 1 - Public Method";
    	}
	}


})();
