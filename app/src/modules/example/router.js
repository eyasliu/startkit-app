import { Route, IndexRoute } from 'react-router';
import Example from './';

const APPRouter = (
<Route path="/example" component={Example}>
  <IndexRoute component={Example} />
</Route>
);

export default APPRouter;
