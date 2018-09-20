import React from 'react';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store';

import './App.css';

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>{routes}</Provider>
    )
  }
}

export default App
