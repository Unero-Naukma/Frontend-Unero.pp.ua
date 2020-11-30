const toggleMenu = () => {
  return {
    type: `TOGGLE_MENU`
  };
};

const toggleFilter = () => {
  return {
    type: `TOGGLE_FILTER`
  };
};

const switchLogin = () => {
  return {
    type: `SWITCH_LOGIN`
  };
};

const switchRegister = () => {
  return {
    type: `SWITCH_REGISTER`
  }
}


export {
  toggleMenu,
  toggleFilter
};
