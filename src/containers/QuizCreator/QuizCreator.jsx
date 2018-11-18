import React, { Component } from "react";
import classes from "./QuizCreator.css";
import Button from "../../components/UserInterface/Button/Button";

export default class QuizCreator extends Component {
  submitHandler = e => {
    e.preventDefault();
  };

  addQuestionHanler = () => {};
  createQuizHandler = () => {};

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={this.submitHandler}>
            <input type="text" name="" id="" />
            <hr />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />

            <select />

            <Button type="primary" onClick={this.addQuestionHanler}>
              Добавить вопрос
            </Button>

            <Button type="success" onClick={this.createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
