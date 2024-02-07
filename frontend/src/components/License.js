import React, { useState, useEffect } from 'react';
import axios from 'axios';

const License = () => {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    fetchLicenses();
  }, []);

  const fetchLicenses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/licenses');
      setLicenses(response.data);
    } catch (error) {
      console.error('Failed to fetch licenses:', error);
    }
  };

  return (
    <div>
      <h2>Licenses</h2>
      {licenses.length > 0 ? (
        <ul>
          {licenses.map(license => (
            <li key={license._id}>
              <h3>{license.type}</h3>
              <p>{license.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No licenses available</p>
      )}
    </div>
  );
};

export default License;
