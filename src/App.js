import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { EnterTask } from './Components/EnterTask/index';
import { TaskList } from './Components/TaskList/index';
import {observer} from 'mobx-react';

//stores
import ToDoStore from './stores/ToDo';

class App extends Component {

render() {
  console.log(ToDoStore)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> ToDo List ( Luis Sandino Ruiz )</h1>
        </div>
        <div className="mainContent">
          <h2>Enter a new task</h2>
          <EnterTask updateList={this.updateList} />
          <TaskList tasksList={ToDoStore.tasksList} remove={this.removeTask} />
        </div>
      </div>
    );
  }
  updateList = (infoTask) => {
    if (infoTask !== '') {
      //const updatedTasks = this.state.myTasks;
      const updatedTasks = ToDoStore.tasksList;
      updatedTasks.push(infoTask);
      this.setState({
        tasks: updatedTasks,
      });
    }

  }
  /*removeTask = (text) => {
    const updatedTasks = ToDoStore.tasksList;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({
      tasks: updatedTasks,
    });
  }*/
}
export default App;

