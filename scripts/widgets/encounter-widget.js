define(['knockout', 'encounter', 'actor'], function(ko, Encounter, Actor) {
	function EncounterWidgetViewModel(params) {
		self = this;
		this.selectedEncounter = params.selectedEncounter || ko.observable();
		if(this.selectedEncounter() == null) this.selectedEncounter(new Encounter());
		self.encounterList = params.encounterList || ko.observableArray();
		self.actorList = params.actorList || ko.observableArray();
		self.selectedActor = ko.observable();
		
		// Add a copy of the selected actor to the encounter
		self.addActor = function() {
			if(self.selectedActor() != null) {
				// Important: Push a *copy* of the actor. // TODO: Create copy constructor
				var copy = new Actor({
						name: self.selectedActor().name(),
						init: self.selectedActor().init(),
						hp: self.selectedActor().hp(),
						dice: self.selectedActor().dice()});
				copy.rollHealth();
				self.selectedEncounter().actors.push(copy);
			}
		};
		
		self.saveEncounter = function() {
			self.encounterList.push(self.selectedEncounter());
			self.selectedEncounter(new Encounter());
		};
		
		// Sort all the actors by initiative- useful for beginning the encounter.
		self.sortActors = function() {
			self.selectedEncounter().actors.sort(function(l, r) {
				return l.init() == r.init() ? 0 : l.init() > r.init() ? -1 : 1;
			});
		};
		
		self.endTurn = function() {
			self.selectedEncounter().actors.remove(this);
			self.selectedEncounter().actors.push(this);
		};
		self.removeActor = function() {
			self.selectedEncounter().actors.remove(this);
		};
	};
	
	return EncounterWidgetViewModel;
});
