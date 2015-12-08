import Devtool from 'utils/DevTools';

export default Component => class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Component>
        {config.debug && config.devtool && <Devtool />}
      </Component>
    )
  }
}