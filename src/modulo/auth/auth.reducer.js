import AuthAPI from "../../shared/api/auth.api";

export const ACTION_TYPES = {
  SIGN_IN: 'auth/SIGN_IN',
  SIGN_OUT: 'auth/SIGN_OUT',
  ERROR: 'auth/ERROR',
  SET_LOADING: 'auth/SET_LOADING'
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
    default:
      return state;
  }
};

export const login = (username, password) => async dispatch => {
  console.log("hello", username)
  try {
    const data = await AuthAPI.login({ username, password });
    console.log("=>>>>>>>>>>>>>", data)
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
      payload: { errorMessage: true },
      // payload: { errorMessage: 'Có lỗi xảy ra !' },
    });

  }
};

export const fetchInfo = () => async (dispatch, getState) => {
  dispatch({
    type: ACTION_TYPES.SET_LOADING,
    payload: { isLoading: true },
  });
  const info = await AuthAPI.getInfo();
  console.log("hello world", info)
  if (info) {
    dispatch({
      type: ACTION_TYPES.SIGN_IN,
      payload: { user: info },
    });

  }

};


export default AuthReducer;