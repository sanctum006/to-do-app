import React from 'react';
import AddItemContainer from '../AddItemContainer/AddItemContainer.jsx';
import TaskListContainer from '../TaskListContainer/TaskListContainer.jsx';
import CompletedTasksContainer from '../CompletedTasksContainer/CompletedTasksContainer.jsx';

const TasksContainer = ({ taskList, addItem, completedTaskList, deleteItem, markItemDone }) => {
    return <div className="task-container">
        <AddItemContainer addItem={addItem} />
        <TaskListContainer taskList={taskList} deleteItem={deleteItem} markItemDone={markItemDone} />
        <CompletedTasksContainer completedTaskList={completedTaskList} />
    </div>;
}

export default TasksContainer;