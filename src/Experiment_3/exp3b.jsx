```jsx
import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(() => {
        setError("Could not load users. Check your internet connection.");
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {error && <p>{error}</p>}

      {users.length === 0 && !error && <p>Loading users...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
