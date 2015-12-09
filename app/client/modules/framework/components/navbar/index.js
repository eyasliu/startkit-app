import { Link } from 'react-router';
import demo from 'framework/decorators/demo';

@demo
export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    text: 'test'
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/example">example</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        {this.props.chidlren}
      </div>
    );
  }
}

