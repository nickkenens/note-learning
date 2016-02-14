Template.NewNoteButton.events({
	"click #newNoteButton": function(event, template){
		 FlowRouter.go('noteNew')
	} 
});
