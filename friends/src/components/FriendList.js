import React from 'react';
import { Link } from 'react-router-dom';

function FriendList(props) {
    if (props.friends.length === 0) {
        return <h3>Loading Friends...</h3>
    }
    return (
        <div>
        {props.friends.map(friend => (
            <Link to= {`/friend/${friend.id}`} key={friend.id}>
                <div>
                    <h1>{friend.name}</h1>
                    <h3>{friend.age}</h3>
                    <p>{friend.email}</p>
                </div>
            </Link>
        ))}
        </div>
    );
}

export default FriendList;