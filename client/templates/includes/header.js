Template.header.helpers({
	activeRouteClass: function(/* route names */) {
		console.log(arguments);
		var args = Array.prototype.slice.call(arguments, 0);
		// console.log(args);
		args.pop();

		var active = _.any(args, function(name) {
			console.log(Router.current());
			return Router.current() && Router.current().route.getName() === name
		});

		return active && 'active';
	}
});