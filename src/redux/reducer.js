import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const updatedTasksAdd = [...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
            return { tasks: updatedTasksAdd };
        case DELETE_TASK:
            const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
            return { tasks: updatedTasksDelete };
        case EDIT_TASK:
            const updatedTasksEdit = state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, task: action.payload.newTask } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasksEdit));
            return { tasks: updatedTasksEdit };
        case TOGGLE_TASK:
            const updatedTasksToggle = state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle));
            return { tasks: updatedTasksToggle };
        default:
            return state;
    }
};
