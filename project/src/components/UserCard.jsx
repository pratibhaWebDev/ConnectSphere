import React from 'react'
import { Link } from 'react-router-dom';
import { useFollow } from '../context/FollowContext';

const UserCard = ({ id, name, username, email }) => {
    const { followUser, unfollowUser, followedUsers } = useFollow();

    const isFollowed = followedUsers.some(user => user.id === id);
    return (

        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            textAlign: "center"
        }}>
            <Link to={`/users/${id}`}>{name}</Link>
            <p>@{username}</p>
            <p>{email}</p>
            <button
                onClick={() => isFollowed
                    ? unfollowUser(id)
                    : followUser({ id, name, username, email })}
                style={{
                    background: isFollowed ? "grey" : "blue",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
            >
                {isFollowed ? "Unfollow" : "Follow"}
            </button>
        </div>


    )
}

export default UserCard