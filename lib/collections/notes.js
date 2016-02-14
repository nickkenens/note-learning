Notes = new Mongo.Collection("Notes");

Notes.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	},
	remove: function(userId, doc){
		return !!userId;
	}
});

Tag = new SimpleSchema({
	name: {
		type: String,
		label: 'Tag Name'
	}
});

URL = new SimpleSchema({
	link: {
		type: String,
		label: 'Full URL'
	}
});

NoteSchema = new SimpleSchema({
	title: {
		type: String,
		label: 'Note Title'
	},
	body: {
		type: String,
		label: 'Note Information',
		autoform: {
			type: 'hidden'
		}
	},
	tags: {
		type: [Tag],
		optional: true
	},
	URLS: {
		type: [URL],
		optional: true
	},
	toBeReviewed: {
		type: Boolean,
		defaultValue: false,
		autoform: {
			type: 'hidden'
		}
	},
	numOfReviews: {
		type: Number,
		defaultValue: 0,
		autoform: {
			type: 'hidden'
		}
	},
	reviewedAt: {
		type: Date,
		label: 'Reviewed At',
		autoform: {
			type: 'hidden'
		}
	},
	createdBy: {
		type: String,
		label: 'Created By',
		autoValue: function() {
			return this.userId();
		},
		autoform: {
			type: 'hidden'
		}
	},
	createdAt: {
		type: Date,
		label: 'Created At',
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: 'hidden'
		}
	}
})

Notes.attachSchema( NoteSchema );
