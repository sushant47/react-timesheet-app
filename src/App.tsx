import React, { Component } from 'react';
import './App.css';
import { todosData } from './components/todosData';
import TodoItem from './components/TodoItem';

interface todos {
  todos: todo[];
}
interface todo {
  id: number;
  text: string;
  completed: boolean;
}

export class App extends Component<{}, todos> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id: number) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo
      })
      console.log(updateTodos);
      return {
        todos: updateTodos
      }
    })
    console.log(this.state);
    console.log('id', id);
  }
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}

export default App;
