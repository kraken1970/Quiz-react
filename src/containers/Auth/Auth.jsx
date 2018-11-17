import React, { Component } from "react";
import classes from "./Auth.css";
import Button from "../../components/UserInterface/Button/Button";

export default class Auth extends Component {
  loginHandler = () => {};
  registerHandler = () => {};
  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={classes.AutnForm}>
            <input type="text" name="" />
            <input type="text" name="" />

            <Button type="success" onClick={this.loginHandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
