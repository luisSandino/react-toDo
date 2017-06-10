import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { EnterTask } from './Components/EnterTask/index';
import { TaskList } from './Components/TaskList/index';



class App extends Component {
  constructor(props) {
    super();
    this.state = {
      tasks: props.tasks,

    };

  }

  updateList = (infoTask) => {
    const updatedTasks = this.state.tasks;
    updatedTasks.push(infoTask);
    this.setState({
      tasks: updatedTasks
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> ToDo List ( Luis Sandino Ruiz )</h1>
        </div>
        <div>
          <h3>Enter a new task</h3>
          <EnterTask updateList={ this.updateList } />
          <TaskList tasks={ this.state.tasks } />
        </div>
      </div>
    );
  }
}

export default App;
