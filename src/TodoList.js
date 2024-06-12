import React from 'react';
import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <>
            <Paper className='todoList'>
                <List>
                    {props.todos.map((todo) => (
                        <>
                            <Todo
                                id={todo.id}
                                task={todo.task}
                                key={todo.id}
                                completed={todo.completed}
                                removeTodo={props.removeTodo}
                                editToDo={props.editToDo}
                                toggleTodo={props.toggleTodo}
                            />
                            <Divider />
                        </>
                    ))}
                </List>
            </Paper>
        </>
    )
}
