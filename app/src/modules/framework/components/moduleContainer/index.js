import {Component} from 'react'
import Navbar from '../navbar'


export default class APPModule extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Navbar></Navbar>
        {this.props.children}
      </div>
    )
  }
}
