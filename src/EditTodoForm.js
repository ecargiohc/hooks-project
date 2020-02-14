import React from 'react';
import useInputState from './hooks/UseInputState';
import TextField from "@material-ui/core/TextField";

function EditTodoForm({id, task, editTodo, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task);
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
        }} 
        style={{marginLeft: "1rem"}}
        >
        <TextField 
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        />
        </form> 
    )
}
export default EditTodoForm;