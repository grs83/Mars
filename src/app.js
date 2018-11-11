import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

// Components
import Dashboard from './components/index';

// Styling
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Dashboard />
  </MuiThemeProvider>
);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'),
);
