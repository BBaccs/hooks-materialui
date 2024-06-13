import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useToDoState from './hooks/useToDoState';
import useLocalStorageState from './hooks/UseLocalStorageState';

export default function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
    const {todos, addTodo, removeTodo, toggleTodo, editToDo} = useToDoState(initialTodos);

    // // Cleaned this up by moving to hooks/useStateToDo.js

    // const [todos, setTodos] = useState(initialTodos);
    // const addTodo = newTodoText => {
    //     setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    // }
    // const removeTodo = todosIDwouldBeAgoodNameForMe => {
    //     const updateTodos = todos.filter(todo => todo.id !== todosIDwouldBeAgoodNameForMe);
    //     setTodos(updateTodos);
    // }
    // const toggleTodo = todoId => {
    //     const updateTodos = todos.map(todo => {
    //         return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo;
    //     });
    //     setTodos(updateTodos);
    // }
    // const editToDo = (todoID, newTask) => {
    //     const updatedTodos = todos.map(todo => {
    //         return todo.id === todoID ? { ...todo, task: newTask } : todo;
    //     });
    //     setTodos(updatedTodos);
    // };
    // useEffect(() => {
    //     window.localStorage.setItem('todos', JSON.stringify(todos));
    //     console.log('todos',todos)
    // }, [todos]);

  
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
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editToDo={editToDo}>
                    </TodoList>
                </Grid>
            </Grid>
        </Paper>
    )
}