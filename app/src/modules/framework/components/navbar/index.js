import {Link} from 'react-router'
import {Component} from 'react'
import sayHello from '../../decorator/sayHello'

class Navbar extends Component{
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
      </div>
    )
  }
}
export default sayHello(Navbar)
