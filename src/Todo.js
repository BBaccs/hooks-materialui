import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useToggle from './hooks/useToggle';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditToDoForm from './EditToDoForm';

export default function Todo({ id, task, completed, removeTodo, editToDo, toggleTodo }) {
    const [isEditing, toggleIsEditing] = useToggle(false);
    return (
        <ListItem style={{ width: '100%', display: 'block' }}>
            {isEditing ? <EditToDoForm id={id} task={task} editToDo={editToDo} toggleEditForm={useToggle}></EditToDoForm> :
                <>
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }} >
                        {task}
                        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    </ListItemText>
                    <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={() => toggleIsEditing(id, task)}>
                        <EditIcon color="primary" />
                    </IconButton>
                </>
            }
        </ListItem>
    )
}