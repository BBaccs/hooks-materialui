import React from 'react';
import { Paper, TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

export default function TodoForm({ myNameisaddTodo }) {
    const [value, handleValueChange, resetValue] = useInputState('');
    return (
        <Paper className='runfrombar'>
            { value }
            <form onSubmit={ e => {
                e.preventDefault();
                myNameisaddTodo(value);  // this should be called addToDo but I'm emphasing something here for learning.
                resetValue();
            }}>
                <TextField
                id="outlined-basic" 
                label="Add new todo" 
                variant="standard" 
                value={ value } 
                onChange={ handleValueChange } 
                margin='normal'
                fullWidth
            />
            </form>
        </Paper>
    )
}