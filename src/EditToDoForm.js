import React from 'react';
import TextField from "@mui/material/TextField";
import useInputState from './hooks/useInputState';

export default function EditToDoForm({ id, task, editToDo, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={e => {
            e.preventDefault();
            editToDo(id, value);
            reset();
            toggleEditForm();
        }}>
            <TextField
                margin="normal"
                style={{ width: '100%' }}
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}
