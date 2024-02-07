import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/profile', {
        // Add authentication token if needed
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      });
      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  };

  const handleLogout = () => {
    // Logic to log out user, clear session, etc.
    console.log('Logging out...');
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          {/* Add more profile information here as needed */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
