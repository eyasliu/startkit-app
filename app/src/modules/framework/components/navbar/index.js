import {Link} from 'react-router'
import {Component} from 'react'

export default class Navbar extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <ul>
        <li><Link to="/example">example</Link></li>
        <li><Link to="/">Home</Link></li>

        </ul>
      </div>
    )
  }
}
