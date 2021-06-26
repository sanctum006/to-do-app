import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({totalTasks, tasksDone}) => {

    let progressBarLength = (tasksDone / (totalTasks)) * 100;

    return <div className="progress-bar">
        <div className="progress-bar-outer">
            <div className="progress-bar-inner" style={{width: `${progressBarLength}%`}}></div>
        </div>
    </div>;
}

export default ProgressBar;