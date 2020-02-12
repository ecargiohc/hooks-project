import React from 'react';
import UseToggleState from './hooks/UseToggleState';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

// or add 'props' as argument...
function Todo({task, id, completed, removeTodo, toggleTodo}) {
    const [isEditing, toggle] = UseToggleState(false);  
    return(
        <ListItem>
            {isEditing ? <h1>EDITING TIME!</h1> :
            <>
            <Checkbox 
                checked={completed} 
                tabIndex={-1}
                onClick={() => toggleTodo(id)}
                />
            <ListItemText
                style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete"
                onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit" onClick={toggle}>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}
export default Todo;