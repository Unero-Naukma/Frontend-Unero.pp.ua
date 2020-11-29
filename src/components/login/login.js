import React from "react";
import "./style.scss";
import Changer from './changer';
import LoginSection from './loginSection';
import Register from './register';

class Login extends React.Component {

  state = {
    loginSwitched: true,
    registerSwitched: false
  }

  switchLogin = () => {
    this.setState(() => ({loginSwitched: true, registerSwitched: false}));
  }

  switchRegister = () => {
    this.setState(() => ({loginSwitched: false, registerSwitched: true}));
  }

  render() {
    return (
      <div className="sign-up-in-wrapper">
        <Changer isLoginActive={this.state.loginSwitched} switchLogin={this.switchLogin} switchRegister={this.switchRegister} />
        <LoginSection active={this.state.loginSwitched}/>
        <Register active={this.state.registerSwitched}/>
      </div>
    );
  };
};

export default Login;