var entries = [
{
	"id": 1,
	"title": "Hello World!",
	"body": "This is the body of my blog entry. Sooo exciting.",
	"published": "11/2/2013"
},
{
    "id": 2,
    "title": "Another Post!",
    "body": "This is the body of another post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, distinctio, incidunt quaerat dolor porro recusandae facilis modi ex blanditiis placeat quos architecto velit voluptates. Quibusdam beatae quos pariatur tenetur sunt.",
    "published": "12/4/2013"
},
{
    "id": 3,
    "title": "Lorem my Ipsum",
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, earum, molestias quos labore cupiditate modi quidem expedita obcaecati beatae totam maiores temporibus velit fugit consectetur reprehenderit. Omnis, quidem, culpa, cupiditate repellendus beatae necessitatibus possimus iusto aspernatur autem perspiciatis molestiae minus consequuntur voluptatem. Delectus, eos, dolore!",
    "published": "1/12/2014"
}];

exports.getBlogEntries = function()
{
	return entries;
}

exports.getBlogEntry = function( id )
{
	for ( var i = 0; i < entries.length; i++ )
	{
		if ( entries[i].id == id ) return entries[i];
	}
}