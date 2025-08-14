import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/UserList";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return <UserList users={users} />;
}

export default Home;