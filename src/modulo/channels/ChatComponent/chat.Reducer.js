import { Dispatch } from 'redux';
import ChatApi from '../../../shared/api/chatComponent.api';

export const ACTION_TYPES = {
    SET_DATA: 'chatModule/SET_DATA',
    SET_ROOM: 'chatModule/SET_ROOM',
    LOAD_HISTORY: 'chatModule/LOAD_HISTORY',
    SET_IS_LOADING: 'chatModule/SET_IS_LOADING',
};

const initialState = {
    list: null,
    room: null,
    isLoading: false,
    query: {
        page: 0,
        size:20, 
      },
}

const ChatReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTION_TYPES.SET_DATA:
            return {
                ...state,
                isLoading: false,
                data: action.payload.list
            };
        case ACTION_TYPES.SET_ROOM:
            return {
                ...state,
                room: action.payload.room,
                isLoading: false,
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
    console.log("loadmore",roomName)
    // if (!getState().notificationsReducer.canLoadMore) {
    //   return;
    // }
    let query = getState().chatReducer.query;
    let oldList = getState().chatReducer.list;
    const  data  = await ChatApi.listChapData(query,roomName);
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
  
export const createRoom = (roomName) => async (dispatch, getState) => {
    console.log("createRoom",roomName)
    let form = {
        name:roomName
    }
    let data = ChatApi.createRoom(form);
    console.log("=>>>>>>>>>>>reducer.data", data)
}

export default ChatReducer;
