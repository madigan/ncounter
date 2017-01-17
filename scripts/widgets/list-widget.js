define(['knockout'], function(ko) {
	function ListWidgetViewModel(params) {
		var self = this;
		self.title = params.title || "List";
		self.list = params.list || ko.observableArray([]);
		self.selected = ko.observable();
		self.sort = function() {
			self.list.sort(function(left, right) {
				return left.init==right.init ? 0 : (left.init > right.init ? -1 : 1);
			});
		};
		self.removeItem = function() {
			self.list.remove(this);
		};
	};
	
	return ListWidgetViewModel;
});
