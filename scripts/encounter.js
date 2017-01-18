define(['knockout'], function(ko) {
	return function Encounter(params) {
		params = params || {};
		this.name = params.name || "Random Encounter";
		this.actors = ko.observableArray(params.actors || []);
	};
});
