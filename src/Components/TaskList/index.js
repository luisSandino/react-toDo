import React, { Component } from 'react';

export class TaskList extends Component {
   
    static propTypes = {
        tasksList : React.PropTypes.array
    };
   

    remove = (e) => {
        const elementToErase = e.target.parentNode.querySelector('span').innerText;
        this.props.remove(elementToErase);
    }

    render() {
        console.log(this.props)
        return (
            <ol>
                {this.props.tasksList.map((task, index) => {
                    return (
                        <li key={index}>
                            <span>{task} </span>
                            <button onClick={this.remove}>Delete</button><hr />
                        </li>
                    );
                })}
            </ol>
        );
    }
}

export default TaskList;  