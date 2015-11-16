import 'common/style';
import APPModule from './components/moduleContainer';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';
import Devtool from 'common/components/devtool';

const store = createStore()(reducers);

export default class FrameWork extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <APPModule children={this.props.children} />;
  }

}
