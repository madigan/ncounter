
	self.actors = ko.observableArray([]);
	self.addActor = function() {
		self.actors.push(new Actor(self.formActor()));
		self.formActor(new Actor());
	};
	self.sortActors = function() {
		self.actors.sort(sort);
	};
	self.endTurn = function() {
		self.actors.remove(this);
		self.actors.push(this);
	};
