define(['knockout'], function(ko) {
	function AppViewModel() {
		this.actorList = ko.observableArray();
	};
	
	return AppViewModel;
});
