if(Meteor.isClient){
	Accounts.onLogin(function() {
		FlowRouter.go('notesOverview');
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

FlowRouter.route('/notes/overview', {
	name: 'notesOverview',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NotesOverview'});
	}
});

FlowRouter.route('/notes/new', {
	name:'noteNew',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NoteNew'});
	}
});


FlowRouter.route('/note/:id', {
	name:'noteView',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NoteView'});
	}
});
