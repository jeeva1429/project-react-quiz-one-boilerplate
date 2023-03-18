import React, { Component, createContext } from "react";
import { Link, Route, Routes, withRouter } from "react-router-dom";
import Result from "./resultComponent";
import "../components/quizComponent.css";
import data from "../resources/question.json";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionNo: 0,
      score: 0,
      wrongAnswer: 0,
      correctAnswer: 0,
    };
  }

  next() {
    if (this.state.questionNo < 14) {
      this.setState((prevState) => ({
        questionNo: prevState.questionNo + 1,
      }));
    }
  }

  previous() {
    if (this.state.questionNo > 0) {
      this.setState((prevState) => ({
        questionNo: prevState.questionNo - 1,
      }));
    }
  }
  resetState() {
    this.setState({
      questionNo: 0,
      score: 0,
      wrongAnswer: 0,
      correctAnswer: 0,
      // add more state variables here and set their default values
    });
  }
  quit() {
    window.confirm("do you want to quit")
      ? this.resetState()
      : this.setState({ questionNo: this.state.questionNo });
  }

  isCorrect(event, selectedAnswer) {
    const correctAnswer = data[this.state.questionNo].answer;
    if (selectedAnswer === correctAnswer) {
      this.setState(
        (prevState) => ({
          score: prevState.score + 1,
          correctAnswer: prevState.correctAnswer + 1,
        }),
        () => {
          alert("It is correct answer");
        }
      );
    } else {
      this.setState(
        (prevState) => ({
          wrongAnswer: prevState.wrongAnswer + 1,
        }),
        () => {
          alert("It is a wrong answer");
        }
      );
    }
  }

  selectOptions() {
    this.setState({
      questionNo: this.state.questionNo + 1,
    });
  }
  render() {
    const options = [
      data[this.state.questionNo].optionA,
      data[this.state.questionNo].optionB,
      data[this.state.questionNo].optionC,
      data[this.state.questionNo].optionD,
    ];

    const functionList = ["previous", "next", "quit"];

    const resultData = {
      score: this.state.score,
      totalQuestions: this.state.questionNo,
      attempted: this.state.questionNo,
      correctAnswers: this.state.correctAnswer,
      wrongAnswers: this.state.wrongAnswer,
    };

    return (
      <div className="container">
        <div id="sub-container">
          <h1 id='quesNo'>Question {this.state.questionNo + 1}</h1>
          <div id="question-no">
            <span>{this.state.questionNo + 1} of 15</span>
          </div>
          <p id='question'>{data[this.state.questionNo].question}</p>
          <div className="options-div">
            {options.map((option) => (
              <button
                key={option}
                onClick={(event) => {
                  this.isCorrect(event, option);
                  this.selectOptions();
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="nav-div">
            {functionList.map(
              (
                el //Here we are creating functions and buttons and also appending fucntions it to
              ) => (
                <button key={el} onClick={() => this[el]()}>
                  {el}
                </button>
              )
            )}

            <Link to="/result" state={resultData}>
              <button id='finish'>Finish</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Quiz;
