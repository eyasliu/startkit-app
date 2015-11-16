import Navbar from '../navbar';

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
