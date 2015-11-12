import React from 'react'

export default class FrameWork extends React.Component{
  constructor(){
    super()
  }
  static defaultProps = {
    text:'Eyas'
  }

  render(){
    return(
      <h1>Hello ,{this.props.text}</h1>
    )
  }

}
