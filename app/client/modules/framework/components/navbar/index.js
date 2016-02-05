import { Link } from 'react-router';
import demo from 'framework/decorators/demo';
import {AppBar, IconMenu, IconButton, MenuItem, FlatButton } from 'material-ui';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

@demo
export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    text: 'StartKit'
  }

  render() {
    return (
      <AppBar 
        title={<span>{this.props.text}</span>}
      />
    );
  }
}

