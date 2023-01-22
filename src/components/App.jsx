import React, { Component } from "react";
import shortid from "shortid";

// import Form from "./TodoList/Form/Form";
// import TodoList from "./TodoList";
// import TodoEditor from "./TodoList/TodoEditor/TodoEditor";
// import FilterTodo from "./TodoList/FilterTodo/FilterTodo";
import initialTodos from "../todos.json";
import Modal from "./TodoList/Modal/Modal";


class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
    modalVisible:false,
  };
// -----------------------------------|   МЕТОДИ ЦИКЛА   
  componentDidMount() {
    const todosLocalStor = localStorage.getItem('todos');
    const todosParse = JSON.parse(todosLocalStor);

    if (todosParse) {
      this.setState({ todos: todosParse });
    }
  };
  componentDidUpdate(prevProp, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  };

// -----------------------------------|   КАСТОМНІ МЕТОДИ
  toggleModal = () => {
    this.setState(({modalVisible})=>({modalVisible:!modalVisible,}));
  };
  
  addTodo = (text) => {

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo,...prevState.todos],
    }));
  };

  deleteTodos = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    this.setState(({todos}) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };


    
  render() {
    const { modalVisible } = this.state;
    
    // const { todos, filter, modalVisible } = this.state;

    // const totalTodoCount =todos.length;
    // const completedTodosCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
    
    // const normalizeFilter = this.state.filter.toLowerCase();
    // const visibleTodos =this.state.todos.filter(todo=>todo.text.toLowerCase().includes(normalizeFilter));

    return(
      <>
        <button type="button" onClick={this.toggleModal}>Open Modal</button>
        {modalVisible &&
          (<Modal onClose={this.toggleModal}>
            {/* <button type="button" onClick={this.toggleModal}>Close Modal</button> */}
          </Modal>)}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <div>
          <p>Main count: {totalTodoCount}</p>
          <p>Done count: {completedTodosCount}</p>
        </div>        

        <TodoEditor onSubmit={this.addTodo} />
        <FilterTodo value={filter} onChange={this.changeFilter} />

        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodos} onToggleCoplited={this.toggleCompleted} /> */}
      </>
    );
  };
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