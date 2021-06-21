
import axios from 'axios';

export const login = ({ username, password }) => {
    console.log("=>>>>>>>>>>",username)
    const data = {
      username,
      password
    }
    return axios
      .post('/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        console.log("=>>>>>>>>>>>>>>", res)
        return res.data;
      });
  };

  export const getInfo = () => {
    return axios.get('/getInfo')
    .then(res => {
      console.log("=>>>>>>>>>>>>>>>>",res)
      return res.data
    })
  }
  const AuthAPI = {
    login,
    getInfo
    
  };
  
  export default AuthAPI;