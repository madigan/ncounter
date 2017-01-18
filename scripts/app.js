require.config({
    urlArgs: "bust=" + Math.random()
});
require(['knockout', 'actor', 'encounter', 'appViewModel'], function(ko, Actor, Encounter, AppViewModel) {
	ko.components.register('actor-widget', {
		viewModel: { require: 'widgets/actor-widget' },
		template: { require: 'text!widgets/actor-widget.html' }
	});
	ko.components.register('list-widget', {
		viewModel: { require: 'widgets/list-widget' },
		template: { require: 'text!widgets/list-widget.html' }
	});
	ko.components.register('encounter-widget', {
		viewModel: { require: 'widgets/encounter-widget' },
		template: { require: 'text!widgets/encounter-widget.html' }
	});
	ko.applyBindings(new AppViewModel());
});
