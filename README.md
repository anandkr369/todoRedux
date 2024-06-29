
# To-Do List Application

This is a simple and interactive To-Do list application built using React and Redux. The application allows users to add, view, edit, and delete tasks. Additionally, tasks can be marked as completed and the task list is saved in local storage to ensure persistence across page reloads.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
  - [Adding a Task](#adding-a-task)
  - [Viewing Tasks](#viewing-tasks)
  - [Editing a Task](#editing-a-task)
  - [Deleting a Task](#deleting-a-task)
  - [Marking a Task as Completed](#marking-a-task-as-completed)
- [File Structure](#file-structure)
- [License](#license)
- [Author](#author)

## Features

- **Add Task**: Users can input a task and add it to the list by pressing the "Add Task" button or pressing Enter.
- **View Tasks**: Displays all added tasks in a list format.
- **Edit Task**: Users can edit tasks by clicking the edit button.
- **Delete Task**: Each task has a delete button that removes the task from the list.
- **Complete Task**: Tasks can be marked as completed without deleting them.
- **Persistent Storage**: Tasks are saved in local storage to ensure they are not lost on page reload.

## Tech Stack

- **React**: Used for building the user interface.
- **Redux**: Used for state management.
- **Material-UI (MUI)**: Used for UI components and styling.
- **JavaScript (ES6)**: Used for implementing application logic.
- **HTML & CSS**: Used for structuring and styling the application.

## Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/anandkr369/todoRedux.git
   cd todo-list
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the application:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to \`http://localhost:3000\` to view the application.

## Usage

### Adding a Task

1. Enter the task in the input field.
2. Press the "Add Task" button or press Enter.

### Viewing Tasks

- All tasks are displayed in a list format below the input field.

### Editing a Task

1. Click the edit button (pencil icon) next to the task.
2. Modify the task and press Enter or click the save button (checkmark icon).

### Deleting a Task

- Click the delete button (trash icon) next to the task.

### Marking a Task as Completed

- Click on the task text to toggle its completion status.

## File Structure

The file structure of the project is as follows:

\`\`\`css
todo-list/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   ├── store.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── package.json
├── README.md
\`\`\`

### Descriptions of Key Files

- **\`public/index.html\`**: The HTML template for the application.
- **\`src/components/TaskInput.jsx\`**: Component for adding a new task.
- **\`src/components/TaskItem.jsx\`**: Component for displaying and editing individual tasks.
- **\`src/components/TaskList.jsx\`**: Component for listing all tasks.
- **\`src/redux/actions.js\`**: Defines Redux action creators.
- **\`src/redux/reducers.js\`**: Defines Redux reducers.
- **\`src/redux/store.js\`**: Configures the Redux store.
- **\`src/App.jsx\`**: Main application component.
- **\`src/index.css\`**: Global CSS styles.
- **\`src/main.jsx\`**: Entry point for React rendering.

## License

This project is licensed under the MIT License. 

## Author

- **Your Name**
- [GitHub](https://github.com/anandkr369)
- [LinkedIn](https://www.linkedin.com/in/anandkr369)
