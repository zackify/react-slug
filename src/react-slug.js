import React from 'react'

export default class Slug extends React.Component{

  constructor(props){
    super()

    this.state = {
      value: this.slugify(props.value)
    }
    this.handleChange = this.handleChange.bind(this)
  }

  slugify(text){
   return text.replace(/[^-a-zA-Z0-9\s+]+/ig, '').replace(/\s+/gi, "-").toLowerCase();
  }

  handleChange(event){
    let value = this.slugify(event.target.value)
    this.setState({value})
    if(this.props.onChange) this.props.onChange(value,event)
  }

  render(){
    return (
      <input {...this.props} value={this.state.value} onChange={this.handleChange} />
    )
  }
}