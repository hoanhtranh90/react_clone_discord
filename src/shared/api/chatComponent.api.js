import axios from 'axios';

export const listChapData = async ( form) => 
    axios.post(`room/loadHistory`, form)


export const createRoom = async (form) => 
    axios.post('create/save_changeR',form)

export const createUser = async (form) => 
    axios.post('create/save_changeU',form)

export const createUser_Room = async () => 
    axios.post('create/saveR_U')

export const createContent = async (form) => 
    axios.post('create/save_C',form)

export const createUserContentRoom = async () => 
    axios.post('create/send')

const ChatApi = {
    listChapData,

    createRoom,
    createUser,
    createUser_Room,

    createContent,
    createUserContentRoom
};

export default ChatApi;
