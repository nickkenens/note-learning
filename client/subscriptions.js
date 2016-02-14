Meteor.subscribe("notes", function() {
	return Notes.find();
});
