import React from 'react';
import './CompletedTasksContainer.css'
import CompletedTaskListItem from '../CompletedTaskListItem/CompletedTaskListItem';

const CompletedTasksContainer = ({ completedTaskList }) => {

    const taskList = completedTaskList.map((item, index) => <CompletedTaskListItem key={index} item={item} />);

    return <div className="completed-tasks-container">
        <h1 className="completed-tasks-heading">Completed</h1>
        {taskList}
    </div>;
}

export default CompletedTasksContainer;