import React from 'react';
import './CompletedTaskListItem.css'

const CompletedTaskListItem = ({ item }) => {
    return <div className="completed-task-list-item-container">
        <li className="completed-task-list-item">{item}</li>
    </div>
}

export default CompletedTaskListItem;