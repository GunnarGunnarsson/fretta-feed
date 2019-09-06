import withRoot from './modules/withRoot';
import React from 'react';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import api from './services/api';
import { updateStundin } from 'actions';

const store = createStore(rootReducer);

// api.getStundin().then(data => {
//   store.dispatch(updateStundin(data));
// });
// console.log(api.getStundin());
api.getStundin().then(data => {
  store.dispatch(updateStundin(data));
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default withRoot(App);
