/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './src/screens/Counter';

import CounterWatcherOne from './src/screens/CounterWatcherOne';
import CounterWatcherTwo from './src/screens/CounterWatcherTwo';

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state.value + action.value);
      return {value: state.value + action.value};
    case 'INIT':
      return {value: action.value};
  }
  return state;
};

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter initialvalue={1} />
        <CounterWatcherOne initialvalue={0} />
        <CounterWatcherTwo initialvalue={0} />
      </Provider>
    );
  }
}

export default App;
