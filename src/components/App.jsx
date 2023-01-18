import React, { Component} from "react";

import TodoList from "./TodoList";
import initialTodos from "../todos.json";


class App extends Component {
  state = {
    todos: initialTodos,
  }

  deleteTodos = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo=>todo.id !== todoId),
    }))
  }
    
  render() {
    const { todos } = this.state;

    const totalTodoCount =todos.length;
    const completedTodosCount = todos.reduce((total,todo)=>(todo.completed?total+1:total),0);

    return(
      <>
        <div>
          <p>Main count: {totalTodoCount}</p>
          <p>Done count: {completedTodosCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodos} />
      </>
    );
  }
};
export default App;



    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
      
    // </div>