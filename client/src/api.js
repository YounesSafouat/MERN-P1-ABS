import axios from 'axios';

const apiUrl = 'http://localhost:3001'; // Update with your server URL


export const registerUser = async (formData) => {
  const formPayload = new FormData();
  formPayload.append('username', formData.username);
  formPayload.append('email', formData.email);
  formPayload.append('password', formData.password);
  formPayload.append('profilePicture', formData.profilePicture);


    const response = await axios.post(`${apiUrl}/api/register`, formPayload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  
  }

