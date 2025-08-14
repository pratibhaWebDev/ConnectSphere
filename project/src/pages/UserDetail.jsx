import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error("Error fetching user:", err));

    
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(res => setPosts(res.data))
      .catch(err => console.error("Error fetching posts:", err));
  }, [userId]);

  if (!user) return <p>Loading user data...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      <p><strong>Company:</strong> {user.company.name}</p>

      <h3>Posts by {user.name}</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetail;