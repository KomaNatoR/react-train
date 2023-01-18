import React from "react";

import Ul from "./todoList.styled";

const TodoList = ({todos,onDeleteTodo,onToggleCoplited}) => {
    return (
        <Ul>
            {todos.map(({id,text,completed}) => (
                <li key={id}>
                    <input type="checkbox" name="licence" onChange={()=>onToggleCoplited(id)} checked={completed} />
                    <p>{text}</p>
                    <button onClick={()=>onDeleteTodo(id)}>Delete</button>
                </li>
            ))}
        </Ul>
        
    );
};
export default TodoList;