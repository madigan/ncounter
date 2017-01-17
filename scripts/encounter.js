define(['knockout'], function(ko) {
	return function Encounter(params) {
		params = params || {};
		this.actors = ko.observableArray(params.actors || []);
	};
});
