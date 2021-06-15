import axios from 'axios';

export const listChapData = async (query, roomName) => {
    axios.get(`history?roomId=${roomName}`, { params: query }).then(res => {
        console.log("=>?>>>>>>>>>>>>>>>>>res",res)
        return res.data
    });
}

export const createRoom = async (form) => {
    axios.post('saveRoom',form).then(res => {
        console.log("=>>>",res)
        return res.data;
      });
}
const ChatApi = {
    listChapData,
    createRoom
};

export default ChatApi;
