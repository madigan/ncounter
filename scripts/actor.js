define(['knockout'], function(ko) {
	function Actor(params) {
		params = params || {};
		this.name = ko.observable( params.name || "" );
		this.init = ko.observable( params.init || 0 );
		this.hp = ko.observable( params.hp || 0 );
		this.dice = ko.observable( params.dice || "");
		
		// Simulate the roll of hit dice for more interesting enemies
		this.rollHealth = function() {
			if(this.dice() == "") return;
			var total = 0;
		
			var results = this.dice().match(/([0-9]+)d([0-9]+)([\-\+][0-9]+)?/);
			if(results !== null) {
				for(var i = 0; i < parseInt(results[1]); i++) {
				  total += Math.floor(Math.random() * parseInt(results[2])) + 1;
				}
				if(parseInt(results[3])) {
				  total += parseInt(results[3]);
				}
			}
			this.hp(total);
		}
	};
	
	return Actor;
});
