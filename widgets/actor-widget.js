define(['knockout', 'actor'], function(ko, Actor) {
	function ActorWidgetViewModel(params) {
		this.selected = params.selected || ko.observable(new Actor());
		this.list = params.list;
	};
	
	ActorWidgetViewModel.prototype.addActor = function() {
		if(!this.list().includes(this.selected)) {
			this.list.push(this.selected());
		}
		this.selected(new Actor());
	};
	
	return ActorWidgetViewModel;
});
