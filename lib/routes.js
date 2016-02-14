if(Meteor.isClient){
	Accounts.onLogin(function() {
		FlowRouter.go('overview');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
};

FlowRouter.triggers.enter([function(context, redirect) {
	if (!Meteor.userId()) {
		FlowRouter.go('home');
	};
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'Home'});
	}
});

FlowRouter.route('/note/new', {
	name:'newNote',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewNote'});
	}
});
