import React from 'react';
import './TodaysDate.css';

const Day = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};

const Month = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "Aug",
    8: "Sept",
    9: "Oct",
    10: "Nov",
    11: "Dec"
};

let todaysDate = new Date();

const TodaysDate = () => {
    return <div className="todays-date">
        <div className="date-details">
            <div className="date">{todaysDate.getDate()}</div>
            <div className="mon-year-details">
                <div className="mon"><strong>{Month[todaysDate.getMonth()]}</strong></div>
                <div className="year">{todaysDate.getFullYear()}</div>
            </div>
        </div>
        <div className="day-details">
            <div className="day">{Day[todaysDate.getDay()]}</div>
        </div>
    </div>;
};

export default TodaysDate;
