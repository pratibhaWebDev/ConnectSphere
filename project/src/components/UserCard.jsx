import React from 'react'

const UserCard = ({name,username,email}) => {
  return (
    
        <div style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          textAlign: "center"
        }}>
          <h3>{name}</h3>
          <p>@{username}</p>
          <p>{email}</p>
        </div>
  )
}

export default UserCard