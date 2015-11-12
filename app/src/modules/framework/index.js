import React from 'react'
import APPModule from './components/moduleContainer'
import Navbar from './components/navbar'

export default class FrameWork extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
        <APPModule children={this.props.children} />
    )
  }

}
