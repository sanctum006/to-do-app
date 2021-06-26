import React from 'react';
import './AddItemContainer.css';

const AddItemContainer = ({ addItem }) => {
    return <div className="add-item-container">
        <form action="" onSubmit={(event) => addItem(event)}>
            <input type="text" placeholder="Add new item" className="task-input" />
            <button type="submit" className="add-task">+</button>
        </form>
    </div>
}

export default AddItemContainer;