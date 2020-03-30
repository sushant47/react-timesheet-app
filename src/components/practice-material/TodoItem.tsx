import React, { Component } from "react";

interface todo {
    key: number;
    item: todoItem;
    handleChange: (data: number) => void;
}
interface todoItem {
    id: number;
    text: string;
    completed: boolean;
}
export class TodoItem extends Component<todo, {}> {
    constructor(props: todo) {
        super(props);
    }
    render() {
        const completedStyle = {
            fontStyle: 'italic',
            color: '#cdcdcd',
            textDecoration: 'line-through'
        }
        return (
            <div>
                <input type='checkbox' checked={this.props.item.completed} onChange={() => this.props.handleChange(this.props.item.id)} />
                <p style={this.props.item.completed ? completedStyle: undefined}>{this.props.item.text}</p>
            </div>
        )
    }
}
export default TodoItem;