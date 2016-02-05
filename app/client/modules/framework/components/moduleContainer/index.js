import Navbar from '../navbar';

// example 
import Example from 'example';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar text="StartKit App" />
        {this.props.children && <Example></Example>}
      </div>
      );
  }
}
