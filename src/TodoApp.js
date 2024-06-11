import React, { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList';

export default function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Buy groceries", completed: false },
        { id: 2, task: "Read a book", completed: false },
        { id: 3, task: "Go for a run", completed: true }
    ];
    
    const [ todos, setTodos ] = useState(initialTodos);
    return (
        <Paper>
            <AppBar>
                <Toolbar>
                    <Typography color='inherit'>TODOS with HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todos={todos}>
        
            </TodoList>
            <Grid>
            </Grid>
        </Paper>
    )
}



// - TodoApp - manages state
//     -TodoForm - we create a new to do in to do form and pass up that value to todo app
//         -TodoList - 
//             -TodoItem - 



// each todo withh have an id,task,completed