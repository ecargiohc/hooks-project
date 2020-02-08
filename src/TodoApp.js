import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp() {
    const initialTodos = [
        {id: 1, task: "take out trash", completed: false},
        {id: 2, task: "organize closet", completed: false},
        {id: 3, task: "practice violin", completed: false}
    ];
    const [todos, setTodos] = useState(initialTodos);
    return(
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "pink"
            }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{height: "64px"}}>
                <Toolbar>
                    <Typography color="inherit">TODOS with HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm />
            <TodoList todos={todos} />
        </Paper>
    )
}
export default TodoApp;

// TodoApp (will manage state for the todos)
// // TodoForm
// // TodoList
// // // TodoItem