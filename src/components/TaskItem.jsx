import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';
import { TextField, Button, IconButton } from '@mui/material';
import { Edit, Delete, Save } from '@mui/icons-material';

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task.task);
    const dispatch = useDispatch();

    const handleEditTask = () => {
        if (newTask.trim()) {
            dispatch(editTask(task.id, newTask));
            setIsEditing(false);
        }
    };

    return (
        <div className="task-item">
            {isEditing ? (
                <TextField
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleEditTask()}
                    fullWidth
                />
            ) : (
                <span
                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    onClick={() => dispatch(toggleTask(task.id))}
                >
                    {task.task}
                </span>
            )}
            <IconButton onClick={() => dispatch(deleteTask(task.id))}>
                <Delete />
            </IconButton>
            <IconButton onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? <Save onClick={handleEditTask} /> : <Edit />}
            </IconButton>
        </div>
    );
};

export default TaskItem;
