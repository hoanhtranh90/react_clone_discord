import AuthAPI from "../../shared/api/auth.api";

export const ACTION_TYPES = {
  SIGN_IN: 'auth/SIGN_IN',
  SIGN_OUT: 'auth/SIGN_OUT',
  ERROR: 'auth/ERROR',
  SET_LOADING: 'auth/SET_LOADING',
  SET_IS_LOGIN:'auth/SET_IS_LOGIN'
};

const initialState = {
  //splash
  isLogin: false,
  userToken: null,
  user: null,
  error: null,
  isLoading: false
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
        isLoading:false,
        user: action.payload.user,
      };
    case ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        isLogin: false,
        userToken: null,
        user: null,
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
      case ACTION_TYPES.SET_IS_LOGIN:
        return {
          ...state,
          isLogin: action.payload.isLogin,
        };
    default:
      return state;
  }
};

export const login = (username, password) => async dispatch => {
  console.log("hello", username)
  try {
    const data = await AuthAPI.login({ username, password });
    if (!data) {
      window.alert("Thông báo", "Kiểm tra tên đăng nhập hoặc mật khẩu")
      dispatch({
        type: ACTION_TYPES.ERROR,
        payload: { errorMessage: "Kiểm tra tên đăng nhập hoặc mật khẩu" },
      });
    } else {

      await localStorage.setItem('jwtToken', data);
      dispatch(fetchInfo());
    }
  } catch (e) {
    dispatch({
      type: ACTION_TYPES.ERROR,
      payload: { },
      // payload: { errorMessage: 'Có lỗi xảy ra !' },
    });

  }
};

export const register = (username, password) => async dispatch => {
  try {
    const data = await AuthAPI.register({ username, password });
    if (!data) {
      window.alert("Thông báo", "Kiểm tra tên đăng nhập hoặc mật khẩu")
      dispatch({
        type: ACTION_TYPES.ERROR,
        payload: { errorMessage: "Kiểm tra tên đăng nhập hoặc mật khẩu" },
      });
    } else {

      // await localStorage.setItem('jwtToken', data);
      // dispatch(fetchInfo());
      console.log("data",data)
    }
  } catch (e) {
    dispatch({
      type: ACTION_TYPES.ERROR,
      payload: { },
      // payload: { errorMessage: 'Có lỗi xảy ra !' },
    });

  }
}
export const logOut = () => async dispatch => {

  dispatch({
    type: ACTION_TYPES.SIGN_OUT,
    payload: { errorMessage: true },
    // payload: { errorMessage: 'Có lỗi xảy ra !' },
  });
}

export const fetchInfo = () => async (dispatch, getState) => {
  console.log("hello world")
  dispatch({
    type: ACTION_TYPES.SET_LOADING,
    payload: { isLoading: true },
  });
  let info;
  let error;
  await AuthAPI.getInfo().then(res => {
    info = res.data;
  }).catch(e => {
    error = e;
  });
  if (info) {
    dispatch({
      type: ACTION_TYPES.SIGN_IN,
      payload: { user: info },
    });
  }
  if(error) {
    localStorage.removeItem('jwtToken');
    dispatch({
      type: ACTION_TYPES.SET_IS_LOGIN,
      payload: { isLogin: false },
    });
    window.location.replace('/auth')
  }

};


export default AuthReducer;