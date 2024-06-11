import React from 'react';
import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <>
            <Paper className='todoList'>
                <List>
                    {props.todos.map((todo) => (
                        <>
                            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
                            <Divider />
                        </>
                    ))}
                </List>
            </Paper>
        </>
    )
}
