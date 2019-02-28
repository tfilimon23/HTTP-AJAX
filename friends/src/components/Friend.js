import React from 'react';


function Friend(props) {
    const friend = props.friends.find(friend => `${friend.id}` === props.match.params.id)

    if (!friend) {
        return <h3>Loading Friend...</h3>
    }
    return (
        <div>
            <h1>{friend.name}</h1>
            <h3>{friend.age}</h3>
            <p>{friend.email}</p>
        </div>
    );
}

export default Friend;