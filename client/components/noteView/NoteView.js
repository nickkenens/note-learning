Template.NoteView.onCreated(function() {
	this.autorun(() => {
		var id = FlowRouter.getParam('id');
		this.subscribe('note', id);
	})
});

Template.NoteView.helpers({
	note: function(){
		var id = FlowRouter.getParam('id');
		return Notes.findOne(id);
	}
});
