import axios from 'axios';

export const listChapData = async (form) =>
    axios.post(`room/loadHistory`, form)
export const createRoom = async (form) =>
    axios.post('create/save_changeR', form)

export const initRoom = async (form) =>
    axios.post('create/init', form)

export const addUser = async (form) =>
    axios.post('create/add', form)

export const checkRoomExits = async (form) =>
    axios.post('create/check', form)

export const sendMess = async (form) =>
    axios.post('room/sendMess', form)
const ChatApi = {
    listChapData,
    initRoom,
    addUser,
    createRoom,
    checkRoomExits,
    sendMess
};

export default ChatApi;
