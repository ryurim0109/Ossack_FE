import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import { Login, Main,Signup,Board } from '../pages/index';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Login}  />
        <Route path='/main' exact component={Main} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/board' exact component={Board} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;