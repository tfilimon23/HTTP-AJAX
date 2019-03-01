import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import FriendList from './components/FriendList';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state ={
    activeFriend: null,
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

  addFriend = (e, friend) => {
    e.preventDefault();
    axios.post("http://localhost:5000/friends", friend)
    .then (res => {
      this.setState ({
        friends: res.data
      });
      this.props.history.push("/");
    })
    .catch (err => {
       console.log(err);
    });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({
        friends: res.data
      });
      this.props.history.push("/");
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="App">
      <nav>
      <h1>Friends</h1>
      <div>
      <NavLink to="/">Home</NavLink>  
      <NavLink to ="/friend-form">{`${this.state.activeFriend ? 'Update' : 'Add'} Friend`}</NavLink>
      </div>
      </nav>
      <Route exact path="/" render ={props => <FriendList
      {...props}
      friends = {this.state.friends}
      />}/>
      <Route path="/friend/:id" render ={props => <Friend
      {...props}
      friends={this.state.friends}
      deleteFriend={this.deleteFriend}
      />}/>
      <Route path="/friend-form" render ={props => <FriendForm
      {...props}
      activeFriend={this.state.activeFriend}
      addFriend ={this.addFriend}
      />}/>
      </div>
    );
  }
}

export default App;

