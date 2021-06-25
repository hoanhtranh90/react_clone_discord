
import axios from 'axios';


  export const getRoom = () => 
     axios.get('/user/getRoom')
  
  const RoomApi = {
    getRoom
  };
  
  export default RoomApi;