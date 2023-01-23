import React, { Component } from "react";
import shortid from "shortid";

// import Form from "./TodoList/Form/Form";
import TodoList from "./TodoList";
import TodoEditor from "./TodoList/TodoEditor/TodoEditor";
import FilterTodo from "./TodoList/FilterTodo/FilterTodo";
// import initialTodos from "../todos.json";
import Modal from "./TodoList/Modal/Modal";
import IconButton from "./TodoList/IconButton/IconButton";
import { ReactComponent as AddIcon } from "./icons/add.svg";


class App extends Component {
  state = {
    todos: [],
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
    const { todos } = this.state;

    if (prevState.todos !== todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    if (todos.length > prevState.todos.length && prevState.todos.length !== 0) {
      this.toggleModal(); // --- робимо перевірку щоб само закривало модалку
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

    // this.toggleModal();
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
    // const { modalVisible } = this.state;
    
    const { todos, filter, modalVisible } = this.state;

    const totalTodoCount =todos.length;
    const completedTodosCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
    
    const normalizeFilter = filter.toLowerCase();
    const visibleTodos = todos.filter(todo => todo.text.toLowerCase().includes(normalizeFilter));
    // console.log(visibleTodos);
    // console.log(todos);

    return(
      <>
        
        {/* <button type="button" onClick={this.toggleModal}>Open Modal</button> */}
        <IconButton onClick={this.toggleModal} aria-label="add todo">
          <AddIcon width="18" height="18"  />
        </IconButton>
        {modalVisible &&
          (<Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
            {/* <button type="button" onClick={this.toggleModal}>Close Modal</button> */}
          </Modal>)}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        <div>
          <p>Main count: {totalTodoCount}</p>
          <p>Done count: {completedTodosCount}</p>
        </div>        

        <FilterTodo value={filter} onChange={this.changeFilter} />

        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodos} onToggleCoplited={this.toggleCompleted} />
      </>
    );
  };
};
export default App;