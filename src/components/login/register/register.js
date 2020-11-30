import React from 'react';
import './style.scss';

const Register = ({active = false}) => {
  let generalClass = "";
  if(!active) {
    generalClass = "register--hidden";
  } 
  return(
    <section className={`register  ${generalClass}`}>
      <div className="main-wrapper  register-wrapper">
        <form action="#" className="register__form" method="post">
          <input type="text" placeholder="Username" id="register__form-username" className="register__form-username" required />
          <input type="password" placeholder="Password" id="register__form-username" className="register__form-password" required />
          <input type="password" placeholder="Repeat Password" id="register__form-username" className="register__form-repeat-password" required />
          <input type="submit" value="Register" id="register__form-username" className="register__form-submit" required />
        </form>
      </div>
    </section>
  );
};

export default Register;