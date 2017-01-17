define(['knockout'], function(ko) {
	return function Actor(params) {
		params = params || {};
		this.name = params.name || "";
		this.init = params.init || 0;
		this.hp = params.hp || 0;
		
		this.sort = function(left, right) {
			return left.init==right.init ? 0 : (left.init > right.init ? -1 : 1);
		};
	};
});
