Meteor.publish("notes", function(){
	return Notes.find({createdBy: this.userId});
});

Meteor.publish("note", function(id){
	return Notes.findOne(id);
});
