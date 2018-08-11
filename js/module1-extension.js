var Module1 = Module1 || {};

Module1.Extension = (function(self){

    self.nouvelleMethode = function(){
        // fonctions à ajouter au module
        return "Extention Module 1"
    };


    return self;
})(Module1.Extension || {});