define(['knockout'], function(ko) {
	return function Actor(params) {
		params = params || {};
		this.name = ko.observable( params.name || "" );
		this.init = ko.observable( params.init || 0 );
		this.hp = ko.observable( params.hp || 0 );
	};
});
