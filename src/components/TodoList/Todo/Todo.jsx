import IconButton from "../IconButton/IconButton";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";

const Todo = ({text,onToggleCoplited,onDeleteTodo,completed}) => {
    return (
        <div>
            <input type="checkbox" name="licence" onChange={onToggleCoplited} checked={completed} />
            <p>{text}</p>
            <IconButton onClick={onDeleteTodo} aria-label="delete todo">
                <DeleteIcon width="18" height="18"  />
            </IconButton>
        </div>
    );  
};
export default Todo;