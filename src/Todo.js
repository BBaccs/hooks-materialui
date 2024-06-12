import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import useToggle from './hooks/useToggle';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function Todo({ id, task, completed, removeTodo, editToDo, toggleTodo }) {
    // const [isCompleted, toggleCompleted] = useToggle(completed);
    return (
        <ListItem>
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                {task}
                <Checkbox tabIndex={-1} checked={completed} onClick={ () => toggleTodo(id) } />
            </ListItemText>
            <IconButton aria-label="Delete" onClick={ () => removeTodo(id) }>
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => editToDo(id, task)}>
                <EditIcon color="primary"/>
            </IconButton>
        </ListItem>
    )
}