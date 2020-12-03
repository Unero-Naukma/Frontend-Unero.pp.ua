import constants from '../constants';
import { login as httpLogin } from '../../services/http-client';

const login = (email, password) => dispatch => {
    dispatch(request({email, password}));

    httpLogin(email, password)
        .then(
          user => dispatch(success(user)),
          error => dispatch(failure(error))
        );
};

const request = user => ({ type: constants.LOGIN_REQUEST, user });
const success = user => ({ type: constants.LOGIN_SUCCESS, user });
const failure = error => ({ type: constants.LOGIN_FAILURE, error });
const logout = () => ({ type: constants.LOGOUT });

export { login, logout };

const toggleMenu = () => {
  return {
    type: constants.TOGGLE_MENU
  };
};

const toggleFilter = () => {
  return {
    type: constants.TOGGLE_FILTER
  };
};

const switchLogin = () => {
  return {
    type: constants.SWITCH_LOGIN
  };
};

const switchRegister = () => {
  return {
    type: constants.SWITCH_REGISTER
  };
};



export {
  toggleMenu,
  toggleFilter,
  switchLogin,
  switchRegister
};
