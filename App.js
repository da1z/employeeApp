import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  constructor() {
    super();
    const firebaseConfig = {
      apiKey: 'AIzaSyAOYRYfYJD_NYBIgVQyUmejUx1yvmZdyRQ',
      authDomain: 'manager-184ec.firebaseapp.com',
      databaseURL: 'https://manager-184ec.firebaseio.com',
      projectId: 'manager-184ec',
      storageBucket: 'manager-184ec.appspot.com',
      messagingSenderId: '517228536290',
      appId: '1:517228536290:web:04304a51c6b5c09cfc59bb',
      measurementId: 'G-DE2MKY6GBR'
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
    }
  }

  render() {
    return <Router></Router>;
  }
}

export default () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <App></App>
    </Provider>
  );
};
