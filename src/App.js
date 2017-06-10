import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { EnterTask } from './Components/EnterTask/index';
import { TaskList } from './Components/TaskList/index';



class App extends Component {
  constructor(props) {
    super();
    this.state = {
      myTasks: props.initialTasks,

    };

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
          <EnterTask updateList={this.updateList} />
          <TaskList tasks= {this.state.myTasks} remove={this.removeTask} />
        </div>
      </div>
    );
  }
  updateList = (infoTask) => {
    const updatedTasks = this.state.myTasks;
    updatedTasks.push(infoTask);
    this.setState({
      tasks: updatedTasks,
    });
  }
  removeTask = (text) => {
    const updatedTasks = this.state.myTasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({
      tasks: updatedTasks,
    });
  }
}

export default App;
