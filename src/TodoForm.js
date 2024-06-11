import React from 'react';
import { Paper, TextField, ListItem, ListItemText, Divider } from '@mui/material';
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
                <TextField id="outlined-basic" label="" variant="outlined" value={ value } onChange={ handleValueChange } />
            </form>
        </Paper>
    )
}