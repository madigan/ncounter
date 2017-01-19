define(['knockout', 'encounter', 'actor'], function(ko, Encounter, Actor) {
	function EncounterWidgetViewModel(params) {
		self = this;
		self.selected = params.selected || ko.observable(new Encounter());
		self.encounterList = params.encounterList || ko.observableArray();
		self.actorList = params.actorList || ko.observableArray();
		self.selectedActor = ko.observable();
		
		self.addActor = function() {
			if(self.selectedActor() != null) {
				self.selected().actors.push(
					new Actor({
						name: self.selectedActor().name(),
						init: self.selectedActor().init(),
						hp: self.selectedActor().hp()
					}));
			}
		};
		
		self.sortActors = function() {
			self.selected().actors.sort(sort);
		};
		
		self.endTurn = function() {
			self.selected().actors.remove(this);
			self.selected().actors.push(this);
		};
	};
	
	return EncounterWidgetViewModel;
});
