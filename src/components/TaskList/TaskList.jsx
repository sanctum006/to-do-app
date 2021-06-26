import React from 'react';
import './TaskList.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import TasksContainer from '../TasksContainer/TasksContainer.jsx';

const TaskList = ({
    taskList,
    completedTaskList,
    addItem,
    deleteItem,
    markItemDone
}) => {
    return <div className="tasks-container">
        <div className="progress-bar-container">
            <ProgressBar totalTasks={taskList.length + completedTaskList.length > 0 ? taskList.length + completedTaskList.length : 1} tasksDone={completedTaskList.length} />
        </div>
        <div className="tasks-container">
            <TasksContainer taskList={taskList} completedTaskList={completedTaskList} addItem={addItem} deleteItem={deleteItem} markItemDone={markItemDone} />
        </div>
    </div>;
}

export default TaskList;