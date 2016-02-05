import 'utils/global';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRouter from './router';

injectTapEventPlugin();
ReactDOM.render(AppRouter, document.getElementById('app'));
