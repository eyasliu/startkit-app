import Navbar from '../navbar';
import Test from './test';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
      );
  }
}
