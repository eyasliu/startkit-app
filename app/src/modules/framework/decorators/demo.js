export default ComposedComponent => class extends React.Component {
  constructor() {
    super();
    this;
  }
  componentDidMount() {
    console.log('hello,this is demo decorator');
  }
  render() {
    return <ComposedComponent {...this.props} />;
  }
};
