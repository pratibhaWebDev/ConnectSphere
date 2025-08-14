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

  if (!user) return <p style={{ padding: "1rem" }}>Loading user data...</p>;

  return (
    <div style={{
      maxWidth: "800px",
      margin: "2rem auto",
      padding: "1.5rem",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
     
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>{user.name}</h2>
        <p style={{ margin: "0.25rem 0" }}><strong>Username:</strong> {user.username}</p>
        <p style={{ margin: "0.25rem 0" }}><strong>Email:</strong> {user.email}</p>
        <p style={{ margin: "0.25rem 0" }}>
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </p>
        <p style={{ margin: "0.25rem 0" }}><strong>Company:</strong> {user.company.name}</p>
      </div>

  
      <div>
        <h3 style={{ marginBottom: "1rem", borderBottom: "2px solid #eee", paddingBottom: "0.5rem" }}>
          Posts by {user.name}
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem"
        }}>
          {posts.map(post => (
            <div key={post.id} style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "1rem",
              backgroundColor: "#fafafa"
            }}>
              <h4 style={{ marginBottom: "0.5rem" }}>{post.title}</h4>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDetail;