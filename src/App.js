import React, { Component } from 'react';
import Header from '../src/components/Header'
import MessageBox from '../src/components/MessageBox'
import MessageList from '../src/components/MessageList'
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyD3KMfaRtNWHaWLvYk7EVaetdD9rbiK4Gg",
      authDomain: "scoreboardjs.firebaseapp.com",
      databaseURL: "https://scoreboardjs.firebaseio.com",
      projectId: "scoreboardjs",
      storageBucket: "scoreboardjs.appspot.com",
      messagingSenderId: "932574061584"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
          <Header title="Simple Firebase App" />
          <div className="columns">
              <div className="column is-3"></div> 
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
          </div>
          <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
