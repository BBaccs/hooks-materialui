import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    }
    const removeTodo = todosIDwouldBeAgoodNameForMe => {
        console.log(todosIDwouldBeAgoodNameForMe);
        const updateTodos = todos.filter(todo => todo.id !== todosIDwouldBeAgoodNameForMe);
        setTodos(updateTodos);
    }
    const editToDo = (todoID, todoTask)=> {
        // console.log(todoID);
        const updateTodos = todos.filter(todo => todo.id !== todoID);
        console.log( todoID, todoTask);
        // setTodos([...todos, { task: todoTask }])
    }
    const toggleTodo = todoId => {
        const updateTodos = todos.map(todo => {
          return todo.id === todoId ? {...todo, completed: !todo.completed} : todo;
        });
        setTodos(updateTodos);
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
                    <TodoList todos={todos} removeTodo={removeTodo} editToDo={editToDo} toggleTodo={toggleTodo}>
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