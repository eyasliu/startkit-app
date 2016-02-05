import APPModule from './components/APPModule';

export default class Example extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <APPModule>
          {this.props.children}
        </APPModule>
      </div>
    );
  }
}
