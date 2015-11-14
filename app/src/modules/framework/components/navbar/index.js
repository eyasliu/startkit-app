import {Link} from 'react-router'
import {Component} from 'react'
import demo from 'framework/decorators/demo'

class Navbar extends Component{

  constructor(){
    super();
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
export default demo(Navbar)
