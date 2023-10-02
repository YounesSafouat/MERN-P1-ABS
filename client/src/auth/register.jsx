import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: null,
    duty: 'cotch', // Default value is 'cotch'
  });

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('username', formData.username);
    formPayload.append('email', formData.email);
    formPayload.append('password', formData.password);
    formPayload.append('profilePicture', formData.profilePicture);
    formPayload.append('duty', formData.duty); // Include the selected duty

    try {
      const response = await axios.post('http://localhost:3001/api/auth/register', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
if (response.data.logged === true) {
  console.log('Registration successful:');
      window.location.href = '/login';
} else {
  window.location.href = '/register';
}
      
      // Handle success (e.g., redirect or display a success message)
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
      
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="duty">Duty</label>
      <select
        id="duty"
        name="duty"
        value={formData.duty}
        onChange={handleInputChange}
      >
        <option value="cotch">Cotch</option>
        <option value="trainee">Trainee</option>
      </select>
      
      <label htmlFor="profilePicture">Profile Picture</label>
      <input
        type="file"
        id="profilePicture"
        name="profilePicture"
        accept="image/*"
        onChange={handleInputChange}
      />
      
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
