define(['knockout'], function(ko) {
	return function Encounter() {
		this.actors = ko.observableArray([]);
	};
});
