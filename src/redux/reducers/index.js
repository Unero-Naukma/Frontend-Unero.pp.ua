const initialState = {
  menuOpened: false,
  filterOpened: false,
  loginSwitched: true,
  registerSwitched: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `TOGGLE_MENU`:
      return {
        ...state,
        menuOpened: !state.menuOpened
      };
    case `TOGGLE_FILTER`:
      return {
        ...state,
        filterOpened: !state.filterOpened
      };
    case `SWITCH_LOGIN`:
      return {
        ...state,
        loginSwitched: true,
        registerSwitched: false
      }
    case `SWITCH_REGISTER`:
      return {
        ...state,
        loginSwitched: false,
        registerSwitched: true
      }
    default:
      return state;
  }
};

export default reducer;
