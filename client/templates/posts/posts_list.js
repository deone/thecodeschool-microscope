var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope'
	},
	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	},
	{
		title: 'The Code School',
		url: 'http://thecodeschool.net'
	}	
];
Template.postsList.helpers({
	posts: postsData
});