
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
        return res.data;
      });
  };

  export const register = ({ username, password }) => {
    const data = {
      username,
      password
    }
    return axios.post('/register',data)
    .then(res => {
      console.log("=>>>",res)
      return res.data
    })
  }
  export const getInfo = () => 
     axios.get('/getInfo')
  
  const AuthAPI = {
    login,
    getInfo,
    register
    
  };
  
  export default AuthAPI;