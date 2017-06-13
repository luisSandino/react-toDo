import React, { Component } from 'react';
//stores
//import ToDoStore from '../../stores/ToDo';


export class TaskList extends Component {
    constructor(props){
        super();

    }
   
    static propTypes = {
        tasksList  : React.PropTypes.array,
        removeTask : React.PropTypes.func,
    };
   


    render() {
        console.log(this.props.removeTask, "holaaaa")
        return (
            <ol>
                {this.props.tasksList.map((task, index) => {
                    return (
                        <li key={index}>
                            <span>{task} </span>
                            <button onClick={this.props.removeTask}>Delete</button><hr />
                        </li>
                    );
                })}
            </ol>
        );
    }
}
//.bind(null, index)
export default TaskList;  