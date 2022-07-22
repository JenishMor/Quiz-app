import './App.css';
import React, { Component } from 'react';
import Quiz from './Component/Quiz';
import Questions from './Utils/Question';

class App extends Component {
  state = {
    questions: Questions
  }

  render() {
    return (
      <div className="App" >
        <Quiz data={this.state.questions} />
      </div>
    );
  }
}

export default App;
