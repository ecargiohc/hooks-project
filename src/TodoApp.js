import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import uuid from 'uuid/v4';

function TodoApp() {
    const initialTodos = [
        {id: 1, task: "take out trash", completed: true},
        {id: 2, task: "organize closet", completed: false},
        {id: 3, task: "practice violin", completed: false}
    ];
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
    };
    const removeTodo = todoId => {
        // filter out removed todo:
        const updatedTodos = todos.filter(todo => todo.id !== todoId) 
        // and then call 'setTodos' with new todos array:
        setTodos(updatedTodos);
    };
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updatedTodos);
    };
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask} : todo
        );
        setTodos(updatedTodos);
    }

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
            <Grid container justify="center" style={{marginTop: "1 rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos}
                    removeTodo={removeTodo} 
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TodoApp;

// TodoApp (will manage state for the todos)
// // TodoForm
// // TodoList
// // // TodoItem