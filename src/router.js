import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />

      <Route path="work" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./routes/WorkPage'))
        })
      }}/>

    <Route path="say" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./routes/SayPage'))
        })
      }}/>

    <Route path="me" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./routes/MePage'))
        })
      }}/>

    <Route path="project" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./routes/ProjectPage'))
        })
      }}/>

    </Router>
  );
}

export default RouterConfig;
