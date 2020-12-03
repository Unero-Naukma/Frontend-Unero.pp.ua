import constants from '../constants'

const initialState = {
  menuOpened: false,
  filterOpened: false,
  loginSwitched: true,
  registerSwitched: false,
  loading: false,
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_MENU:
      return {
        ...state,
        menuOpened: !state.menuOpened
      };
    case constants.TOGGLE_FILTER:
      return {
        ...state,
        filterOpened: !state.filterOpened
      };
    case constants.SWITCH_LOGIN:
      return {
        ...state,
        loginSwitched: true,
        registerSwitched: false
      }
    case constants.SWITCH_REGISTER:
      return {
        ...state,
        loginSwitched: false,
        registerSwitched: true
      }
    case constants.LOGIN_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payoad
        },
        error: false,
        loading: false
      }
    case constants.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      }
    case constants.LOGOUT:
      return {
        ...state,
        user: initialState.user
      }
    default:
      return state;
  }
};

export default reducer;
