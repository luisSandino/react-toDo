import React, { Component } from 'react';


export class EnterTask extends Component {


    render() {
        return (
            <form  onSubmit={this.justAdded} >
                <input type="text" id="task" />
            </form>
        );
    }

    justAdded = (event) => {
        event.preventDefault();
        const input = event.target.querySelector('input');
        const value = input.value;
        input.value = '';
        this.props.updateList(value);

    };
}

