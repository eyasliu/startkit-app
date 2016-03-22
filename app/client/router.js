// 应用总路由
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Framework from 'framework';

import ExampleRouter from 'example/router';
import Index from 'example';

const APPRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={Framework}>
      {ExampleRouter}
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

export default APPRouter;
