import {Link} from 'react-router'
import {Component} from 'react'

export default class Navbar extends Component{
  constructor(){
    super()
  }
  static defaultProps={
    text:'test'
  }

  render(){
    return (
      <div>
        {this.props.text}
        <ul>
        <li><Link to="/example">example</Link></li>
        <li><Link to="/">Home</Link></li>
        </ul>
        {this.props.chidlren}
      </div>
    )
  }
}
