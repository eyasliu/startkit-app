import 'common/style';
import APPModule from './components/moduleContainer';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';
import Devtool from 'common/components/devtool';

const store = createStore()(reducers);
console.log(config);
export default class FrameWork extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <APPModule children={this.props.children} />
        </Provider>
        { config.debug && config.devtool && <Devtool store={store} /> }
      </div>
    );
  }

}
