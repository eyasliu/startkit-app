// 应用总路由
import React from 'react'
import Router, { Route, IndexRoute } from 'react-router';
import createHistory  from 'history/lib/createHashHistory'

import Framework from 'framework'

import ExampleRouter from 'example/router'

const APPRouter = (
  <Router history={createHistory()}>
    <Route path="/" component={Framework}>
      {ExampleRouter}
    </Route>
  </Router>
)

export default APPRouter
