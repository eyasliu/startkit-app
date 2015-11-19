import 'common/style';
import APPModule from './components/moduleContainer';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';
import Devtool from 'utils/DevTools';

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
        <div>
          <APPModule children={this.props.children} />
          { config.debug && config.devtool && <Devtool store={store} /> }
        </div>
          
        </Provider>
        
      </div>
    );
  }

}
