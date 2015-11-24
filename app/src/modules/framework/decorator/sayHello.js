import { Component } from "React";

export var Enhance = ComposedComponent => class extends Component {
  constructor() {
    this.state = { data: null };
  }
  componentDidMount() {
    console.log('=============>','hello')
  }
  render() {
    return <ComposedComponent {...this.props} data={this.state.data} />;
  }
};
