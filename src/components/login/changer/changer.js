import React from 'react';
import '../style.scss';

const Changer = ({isLoginActive, switchLogin, switchRegister}) => {
  let loginClass = "";
  let registerClass = "";
  if(isLoginActive) {
    loginClass = "wrapper__title-login--active";
  } else {
    registerClass = "wrapper__title-register--active"
  }
  return (
    <div className="wrapper__title">
      <h2 onClick={switchLogin} className={`wrapper__title-login  ${loginClass}`}>Login</h2>
      <h2 onClick={switchRegister} className={`wrapper__title-register  ${registerClass}`}>Register</h2>
    </div>
  );
};

export default Changer;