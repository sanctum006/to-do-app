import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskListContainer = ({ taskList, deleteItem, markItemDone }) => {

    const taskListItems = taskList.map((task, index) => <TaskListItem key={index} id={index} listItem={task} deleteItem={deleteItem} markItemDone={markItemDone} />);

    return <div className="task-list-container">
        {taskListItems}
    </div>;
}

export default TaskListContainer;