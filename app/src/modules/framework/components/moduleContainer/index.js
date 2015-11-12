import {Component} from 'react'


export default class APPModule extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
