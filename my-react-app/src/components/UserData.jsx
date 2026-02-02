import { useState, useEffect } from "react";
import './counter.css'

// Requirements:

// Use useState for user data
// Use useState for loading state
// Use useEffect to fetch data on mount
// API endpoint: https://jsonplaceholder.typicode.com/users/1
// Show "Loading..." while fetching
// Display: name, email, city (from address.city)


const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
};

export default UserData;
