import React from 'react'
import 'common/style'
import APPModule from './components/moduleContainer'


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
