import React from 'react';
import './TaskListItem.css'

const TaskListItem = ({ id, listItem, deleteItem, markItemDone }) => {
    return <div className="task-list-item-container">
        <li className={`l${id} task-list-item`}>{listItem} <div className="btns"><i onClick={event => deleteItem(event.target.classList[0][1])} className={`d${id} fas fa-minus remove-btn`}></i><i onClick={(event) => markItemDone(event.target.classList[0][1])} className={`d${id} fas fa-check mark-btn`}></i></div></li>
    </div>;
}

export default TaskListItem;