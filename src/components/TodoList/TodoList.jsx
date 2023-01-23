import React from "react";

import Todo from "./Todo/Todo";
import Ul from "./todoList.styled";

const TodoList = ({ todos, onDeleteTodo, onToggleCoplited }) => {

    return (
        <Ul>
            {todos.map(({id,text,completed}) => (
                <li key={id}>
                    <Todo
                        text={text}
                        completed={completed}
                        onToggleCoplited={() => onToggleCoplited(id)}
                        onDeleteTodo={() => onDeleteTodo(id)}
                    />
                </li>
            ))}
        </Ul>
    );
};
export default TodoList;