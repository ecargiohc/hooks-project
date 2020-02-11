import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

// or add 'props' as argument...
function Todo({task, completed}) {
    return(
        <ListItem>
            <Checkbox checked={completed} tabIndex={-1}/>
            <ListItemText>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
export default Todo;