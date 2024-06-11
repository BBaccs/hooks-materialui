import React, { useState, useEffect } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Buy groceries", completed: true },
        { id: 2, task: "Read a book", completed: false },
        { id: 3, task: "Go for a run", completed: true }
    ];

    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
    }

    return (
        <Paper>
            <AppBar className='appBar'>
                <Toolbar>
                    <Typography color='inherit'>TODOS with HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container style={{ marginTop: '1rem', justifyContent: 'center' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm myNameisaddTodo={addTodo} />
                    <TodoList todos={todos}>
                    </TodoList>
                </Grid>
            </Grid>
        </Paper>
    )
}



// - TodoApp - manages state
//     -TodoForm - we create a new to do in to do form and pass up that value to todo app
//         -TodoList - 
//             -TodoItem - 



// each todo withh have an id,task,completed