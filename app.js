function Actor(other) {
	other = other || {};
	this.name = other.name || "";
	this.init = other.init || 0;
	this.hp = other.hp || 1;
};
var sort = function(left, right) {
	return left.init==right.init ? 0 : (left.init > right.init ? -1 : 1);
};

function Encounter() {
	this.actors = [];
};

var ViewModel = function() {
	self = this;
	self.formActor = ko.observable(new Actor());
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
};
ko.applyBindings(new ViewModel());

