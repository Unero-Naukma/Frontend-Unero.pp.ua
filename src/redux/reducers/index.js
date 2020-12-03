const initialState = {
  menuOpened: false,
  filterOpened: false,
  loginSwitched: true,
  registerSwitched: false,
  loading: true
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
      case `CONTENT_LOADED`:
        return {
          ...state,
          menu: action.payload
        }
    default:
      return state;
  }
};

export default reducer;
