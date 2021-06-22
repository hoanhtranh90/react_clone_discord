import { Dispatch } from 'redux';
import ChatApi from '../../../shared/api/chatComponent.api';

export const ACTION_TYPES = {
    SET_LIST: 'chatModule/SET_LIST',
    SET_ROOM: 'chatModule/SET_ROOM',
    SET_USER: 'chatModule/SET_USER',
    LOAD_HISTORY: 'chatModule/LOAD_HISTORY',
    SET_IS_LOADING: 'chatModule/SET_IS_LOADING',
    SET_EXITS_ROOM: 'chatModule/SET_EXITS_ROOM'
};

const initialState = {
    user: null,
    list: [],
    room: null,
    isLoading: false,
    isExitsRoom: true
    // query: {
    //     page: 0,
    //     size:20, 
    //   },
}

const ChatReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTION_TYPES.SET_LIST:
            return {
                ...state,
                list: action.payload.list
            };
        case ACTION_TYPES.SET_ROOM:
            return {
                ...state,
                room: action.payload.room,
            }
        case ACTION_TYPES.SET_USER:
            return {
                ...state,
                user: action.payload.user,
            }
        case ACTION_TYPES.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case ACTION_TYPES.SET_EXITS_ROOM:
            return {
                ...state,
                isExitsRoom: action.payload.isExitsRoom,
            };
        default:
            return state;
    }
};

export const checkExitsRoom = (roomName) => async (dispatch, getState) => {
    let checkForm = {
        roomName
    }
    let ischeck = await ChatApi.checkRoomExits(checkForm)
    dispatch({
        type: ACTION_TYPES.SET_EXITS_ROOM,
        payload: { isExitsRoom: ischeck.data },
    });
}
export const loadMore = (roomName) => async (dispatch, getState) => {
    let query = getState().chatReducer.query;
    let oldList = getState().chatReducer.list;
    let room = {
        name: roomName
    }
    let dataHistory = await ChatApi.listChapData(room)
    dispatch({
        type: ACTION_TYPES.SET_LIST,
        payload: { list: dataHistory.data },
    });
};
export const updateData = (data) => async (dispatch, getState) => {
    console.log("=>>>>data", data)
    let form = {
        noidung: data.noidung,
        user: { username: data.userName }
    }
    let oldList = getState().chatReducer.list;
    const list = [...oldList, form]
    dispatch({
        type: ACTION_TYPES.SET_LIST,
        payload: { list: list },
    });
}


export const createRoom = (roomName, userName) => async (dispatch, getState) => { //init Room
    console.log("roomName", roomName)
    console.log("userName", userName)
    dispatch({
        type: ACTION_TYPES.SET_IS_LOADING,
        payload: { isLoading: true },
    });
    let initForm = {
        userName,
        roomName
    }

    let data = await ChatApi.initRoom(initForm);
    console.log("=????>>>>>>>>>>>>>>>>>>>", data)

    // let userForm = {
    //     name: userName
    // }
    // let createSuccsess = await ChatApi.createUser(userForm);
    // console.log("=>>>>>>>>>>>reducer.data0", createSuccsess)


    // dispatch({
    //     type: ACTION_TYPES.SET_ROOM,
    //     payload: { room: roomName },
    // });
    // dispatch({
    //     type: ACTION_TYPES.SET_USER,
    //     payload: { user: userName },
    // });
    dispatch({
        type: ACTION_TYPES.SET_IS_LOADING,
        payload: { isLoading: false },
    });
    dispatch({
        type: ACTION_TYPES.SET_EXITS_ROOM,
        payload: { isExitsRoom: true },
    });
}

export default ChatReducer;
