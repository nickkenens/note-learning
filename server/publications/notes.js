Meteor.publish("notes", function(){
	return Notes.find({createdBy: this.userId});
});
