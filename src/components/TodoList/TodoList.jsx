import React from "react";

import Ul from "./todoList.styled";

const TodoList = ({todos,onDeleteTodo}) => {
    return (
        <Ul>
            {todos.map(({id,text}) => (
            <li key={id}>
                <p>{text}</p>
                <button onClick={()=>onDeleteTodo(id)}>Delete</button>
            </li>
            ))}
        </Ul>
        
    );
};
export default TodoList;