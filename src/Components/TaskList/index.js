import React, { Component } from 'react';


export class TaskList extends Component {




    remove = (e) => {
        const elementToErase = e.target.parentNode.querySelector('span').innerText;
        this.props.remove(elementToErase);
    }

    render() {
        const items = this.props.tasks.map((e, k) => {
            return <li key={k}><span>{e} </span><button onClick={this.remove}>Delete</button><hr /></li>
        });
        return (
            <ol>
                {items}
            </ol>
        );
    }
}

export default TaskList;  