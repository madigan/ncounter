define(['knockout', 'actor', 'encounter'], function(ko, Actor, Encounter) {
	var ACTOR_TAG = "actors";
	var ENCOUNTER_TAG = "encounters";
	
	function loadFromLocal(list, tag, Class) {
		// Load the data from local storage
		var things = localStorage.getItem(tag);
		if(things) {
			things = JSON.parse(things);
		} else {
			things = [];
		}
		
		// Convert the raw data to the class
		for(var i = 0; i < things.length; i++) {
			list.push(new Class(things[i]));
		}
		
		// Make sure any changes are saved; not efficient, but it works
		list.subscribe(function() {
			localStorage.setItem(tag, ko.toJSON(list()));
		}, null);
	}
	
	function AppViewModel() {
		this.actors = ko.observableArray();
		this.selectedActor = ko.observable(new Actor());
		this.encounters = ko.observableArray();
		this.selectedEncounter = ko.observable(new Encounter());
		
		// Load the libraries from local storage
		loadFromLocal(this.actors, ACTOR_TAG, Actor);
		loadFromLocal(this.encounters, ENCOUNTER_TAG, Encounter);
	};
	
	return AppViewModel;
});
