import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state ={
    friends: [],
    error: ''
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(res => {
      console.log(res);
      this.setState({ friends: res.data });
    })
    .catch(err=> {
      this.setState({ error: err });
    })
  }

  render() {
    return (
      <div className="App">
      {this.state.friends.map(friend => (
        <div key={friend.id}>
          <h1>{friend.name}</h1>
          <h3>{friend.age}</h3>
          <p>{friend.email}</p>
        </div>
      ))}
      </div>
    );
  }
}

export default App;
