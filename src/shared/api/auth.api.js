
import axios from 'axios';

export const login = ({ username, password }) => {
    const token = localStorage.getItem('jwtToken');
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    return axios
      .post('/auth', data, {
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        // console.log("=>>>>>>>>>>>>>>", res)
        return res.data;
      });
  };

  const AuthAPI = {
    login,
    
  };
  
  export default AuthAPI;