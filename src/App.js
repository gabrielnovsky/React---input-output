import React, { Component } from "react";
import "./App.css";
import Validation from "./Components/ValidationComponent";
import Char from "./Components/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteBox = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    let charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteBox(index)}
        />
      );
    });
    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
