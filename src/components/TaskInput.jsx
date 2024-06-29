import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button } from '@mui/material';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            // Generate a unique ID using the current timestamp
            const uniqueId = Date.now();
            dispatch(addTask({ id: uniqueId, task, completed: false }));
            setTask('');
        }
    };

    return (
        <div className="task-input">
            <TextField
                label="Add a new task"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>
                Add Task
            </Button>
        </div>
    );
};

export default TaskInput;
