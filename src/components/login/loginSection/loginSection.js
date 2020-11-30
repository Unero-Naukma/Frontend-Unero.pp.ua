import React from 'react';
import './style.scss';

const LoginSection = ({active = true}) => {
  let generalClass = "";
  if(!active) {
    generalClass = "login--hidden";
  } 
  return (
    <section className={`login  ${generalClass}`}>
      <div className="main-wrapper  login-wrapper">
        <form action="#" className="login__form" method="post">
          <input type="text" placeholder="Username" id="login__form-username" className="login__form-username" required />
          <div className="login__form-password">
            <input type="password" placeholder="Password" id="login__form-password-input" className="login__form-password-input" required />
            <a href="#" className="login__form-password-lost">Forgot?</a>
          </div>
          <div className="login__form-remember">
            <input type="checkbox" id="login__form-remember" className="login__form-remember-checkbox" required />
            <label htmlFor="login__form-remember" className="login__form-remember-label">Rember</label>
          </div>
          <input type="submit" value="Login" id="login__form-username" className="login__form-submit" required />
        </form>
      </div>
    </section>
  );
};

export default LoginSection;