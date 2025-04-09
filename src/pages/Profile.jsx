import React, { useState } from 'react';
import Header from '../components/Header';

function Profile() {
  const [name, setName] = useState('User Name');
  const [email, setEmail] = useState('user@example.com');

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Profile saved:', { name, email });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="page-header">Profile</h2>
        <form onSubmit={handleSave} className="form-container">
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <button type="submit" className="button">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
