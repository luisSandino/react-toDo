import React, { Component } from 'react';


export class TaskList extends Component {
   

    render() {
        const items = this.props.tasks.map((e, k) => {
            return <li key={k}>{e} <button onClick={this.remove}>Delete</button></li>
        });
        return (
            <ul>
               {items}
            </ul>
        );
    }
}

export default TaskList;