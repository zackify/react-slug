var React = require('react')
var SlugInput = require('./react-slug.jsx');

var test = function(event){
	console.log(event.target.value)
}
React.render(<SlugInput onChange={test}/>, document.body)