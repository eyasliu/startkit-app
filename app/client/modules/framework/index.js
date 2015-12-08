import 'common/style';
import APPModule from './components/moduleContainer';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';
import devtool from './decorators/devtool';


const store = createStore()(reducers);

@devtool
export default
class FrameWork extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <APPModule>
            {this.props.children}
          </APPModule>
        </Provider>
      </div>
    );
  }
}
