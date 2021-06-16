import { Dispatch } from 'redux';
import ChatApi from '../../../shared/api/chatComponent.api';

export const ACTION_TYPES = {
    SET_DATA: 'chatModule/SET_DATA',
    SET_ROOM: 'chatModule/SET_ROOM',
    SET_USER: 'chatModule/SET_USER',
    LOAD_HISTORY: 'chatModule/LOAD_HISTORY',
    SET_IS_LOADING: 'chatModule/SET_IS_LOADING',
};

const initialState = {
    user: null,
    list: null,
    room: null,
    isLoading: false,
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
        case ACTION_TYPES.SET_DATA:
            return {
                ...state,
                data: action.payload.list
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
        default:
            return state;
    }
};

export const loadMore = (roomName) => async (dispatch, getState) => {
    console.log("loadmore", roomName)
    // if (!getState().notificationsReducer.canLoadMore) {
    //   return;
    // }
    let query = getState().chatReducer.query;
    let oldList = getState().chatReducer.list;
    const data = await ChatApi.listChapData(roomName);
    console.log("=>>>>>>>>>>>>>>>>>>>>>>dataaaaa", data)
    if (data) {
        //   const list = [...oldList, ...data.notis.filter(e => { return e.toRoleId == currentRole.roleId })];
        //   const canLoadMore = data.notis.length >= query.size;
        //   console.log("canLoadMore: ", canLoadMore);
        //   dispatch({
        //     type: ACTION_TYPES.SET_LIST,
        //     payload: { list: list, canLoadMore: canLoadMore },
        //   });
        //   query.page = query.page + 1;
        //   dispatch({ type: ACTION_TYPES.SET_QUERY, payload: { query } });
    }
};

export const createRoom = (roomName, userName) => async (dispatch, getState) => { //init Room
    console.log("roomName", roomName)
    console.log("userName", userName)
    dispatch({
        type: ACTION_TYPES.SET_IS_LOADING,
        payload: { isLoading: true },
    });
   
    let userForm = {
        name: userName
    }
    let createSuccsess = await ChatApi.createUser(userForm);
    console.log("=>>>>>>>>>>>reducer.data0", createSuccsess)

    let room = {
        name: roomName
    }
    let createRoom = await ChatApi.createRoom(room);

    let dataHistory = await ChatApi.listChapData(room)
    console.log("=>>>>>>>>>dataHistory",dataHistory)


    let data1 = await ChatApi.createUser_Room();
    console.log("=>>>>>>>>>>>reducer.data1", data1)


    dispatch({
        type: ACTION_TYPES.SET_DATA,
        payload: { list: dataHistory.data },
    });
    dispatch({
        type: ACTION_TYPES.SET_ROOM,
        payload: { room: roomName },
    });
    dispatch({
        type: ACTION_TYPES.SET_USER,
        payload: { user: userName },
    });
    dispatch({
        type: ACTION_TYPES.SET_IS_LOADING,
        payload: { isLoading: false },
    });
}

export default ChatReducer;
