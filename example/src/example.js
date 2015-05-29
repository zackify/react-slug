import React from 'react'
import Slug from 'react-slug'

export default class App extends React.Component{

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    console.log(event.target.value)
  }

  render(){
    return <Slug value="this will be stringified" onChange={this.handleChange} className="test" />
  }
}
React.render(<App />, document.getElementById('app'));