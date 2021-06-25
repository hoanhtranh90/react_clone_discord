import { Dispatch } from 'redux';
import RoomApi from '../../../shared/api/room.api';

export const ACTION_TYPES = {
    SET_ROOM: 'room/SET_ROOM',
    SET_LOADING: 'room/SET_LOADING',
    SET_CURRENT_ROOM: 'room/SET_CURRENT_ROOM',
};

const initialState = {
    listRoom: [],
    isLoading: false,
    currentRoom: null,
    // query: {
    //     page: 0,
    //     size:20, 
    //   },
}

const SlideBarReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTION_TYPES.SET_ROOM:
            return {
                ...state,
                listRoom: action.payload.listRoom
            };
        case ACTION_TYPES.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            };
        case ACTION_TYPES.SET_CURRENT_ROOM:
            return {
                ...state,
                currentRoom: action.payload.currentRoom
            };
        default:
            return state;
    }
};


export const loadData = () => async (dispatch, getState) => {
    console.log("=>>>>>>..dataRoom")
    dispatch({
        type: ACTION_TYPES.SET_LOADING,
        payload: { isLoading: true },
    });
    let dataRoom = await RoomApi.getRoom()
    console.log("=>>>>>>..dataRoomdataRoom",dataRoom)


    dispatch({
        type: ACTION_TYPES.SET_ROOM,
        payload: { listRoom: dataRoom.data },
    });
    
    dispatch({
        type: ACTION_TYPES.SET_LOADING,
        payload: { isLoading: false },
    });
};



export default SlideBarReducer;
