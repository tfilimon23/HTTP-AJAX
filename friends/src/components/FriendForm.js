import React, { Component } from 'react';

class FriendForm extends Component {
    state = {
    friend: this.props.activeFriend || {
      name: '',
      age: '',
      email: ''
      }
    };

    componentDidUpdate(prevProps) {
      if( this.props.activeFriend && prevProps.activeFriend === this.props.activeFriend)
        {
          this.setState ({
            friend: this.props.activeFriend
          });
        }
      }

    changeHandler = e => {
      e.persist();
      let value = e.target.value
      if (e.target.name === 'age'){
        value = parseInt(value, 10);
      }
      this.setState(prevState =>({
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }));
    }

    handleSubmit = e => {
    //  if (this.props.activeFriend) {
    //    this.props.updateFriend(e, this.state.friend);
    //  }
    //  else
    {
       this.props.addFriend(e, this.state.friend);
     }
     this.setState({
       friend: {
         name: '',
         age: '',
         email: ''
       }
     });
    }

  render(){
    return(
      <div>
      <h1>{`${this.props.activeFriend ? 'Update' : 'Add'}Friend`}</h1>
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        name="name"
        onChange={this.changeHandler}
        placeholder="name"
        value={this.state.friend.name}
        />
        <input 
        type="number"
        name="age"
        onChange={this.changeHandler}
        placeholder="age"
        value={this.state.friend.age}
        />
        <input 
        type="text"
        name="email"
        onChange={this.changeHandler}
        placeholder="email"
        value={this.state.friend.email}
        />
        <button>{`${this.props.activeFriend ? 'Update' : 'Add'} Friend`}</button>
      </form>
    </div>
    );
  }
}


  export default FriendForm;