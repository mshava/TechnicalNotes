var findSmartiesByColor = function(smarties, color){

	for (var i = 0; i < smarties.length; i++){

		var smartie = smarties[i];

		if (smartie.color === color){

			return smartie;
		}	
	}
};

var findMostAbundantSmartie = function(smarties){
	var mostAbundantSmartie = {
			color : "",
			qty : 0
	};

	 for (var i = 0; i < smarties.length; i++){

	 	var Currentsmartie = smarties[i];

	 		if (Currentsmartie.qty > mostAbundantSmartie.qty){

	 			mostAbundantSmartie = Currentsmartie;
	 		}
		}	
	return mostAbundantSmartie;	
};

var findSmartiesLessThan = function(smarties){

	var maxSmarties = {
		color : "",
		qty : 7
	};

	var lessThan = [];
	
	for(var i = 0; i < smarties.length; i++){
	
		 var Currentsmartie = smarties[i];

			if (Currentsmartie.qty < maxSmarties.qty){
			
				lessThan.push(Currentsmartie); 
			}		
	}

	return lessThan;
};

var findSmarties = function(){

};

var groupSmarties = function(){

};

var sortSmarties = function(){

};

var addTotalForTeams = function(){

};
