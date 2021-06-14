import AuthAPI from "../../shared/api/auth.api";

export const ACTION_TYPES = {
    SIGN_IN: 'auth/SIGN_IN',
    SIGN_OUT: 'auth/SIGN_OUT',
    ERROR: 'auth/ERROR',
  };
  
  const initialState = {
    //splash
    isLogin: false,
    userToken: null,
    user: null,
    error:null
  };
  
  
  const AuthReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case ACTION_TYPES.SIGN_IN:
        return {
          ...state,
          isLogin: true,
          user: action.payload.user,
        };
      case ACTION_TYPES.SIGN_OUT:
        return {
          ...state,
          isLogin: false,
          userToken: null,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export const login = ({ username, password }) => async dispatch => {
    try {
      const { id_token, error } = await AuthAPI.login({ username, password });
      if (error) {
        window.alert("Thông báo", "Kiểm tra tên đăng nhập hoặc mật khẩu")
        dispatch({
          type: ACTION_TYPES.ERROR,
          payload: { errorMessage: error },
        });
      } else {
  
        await localStorage.setItem('jwtToken', id_token);
        dispatch(fetchInfo());
      }
    } catch (e) {
      dispatch({
        type: ACTION_TYPES.ERROR,
        payload: { errorMessage: true },
        // payload: { errorMessage: 'Có lỗi xảy ra !' },
      });
  
    }
  };
  
  export const fetchInfo = () => async (dispatch, getState) => {

      const { user, deptRoles } = await AuthAPI.fetchInfo();
    

  };    
  
  
  export default AuthReducer;