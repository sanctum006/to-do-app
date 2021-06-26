import React from 'react';
import './App.css';
import TodaysDate from './../TodaysDate/TodaysDate.jsx';
import TaskList from '../TaskList/TaskList';

class App extends React.Component {

  state = {
    taskList: ["Web D", "Leetcode"],
    completedTaskList: ["Upsolve CC"]
  };

  addItem = (event) => {
    event.preventDefault();

    if (event.target.firstChild.value !== "" && event.target.firstChild.value !== " ") {
        this.setState({
          taskList: [event.target.firstChild.value, ...this.state.taskList]
        });
        console.log(this.state.taskList);
        event.target.firstChild.value = "";
    }
  }

  deleteItem = (elementID) => {
    let a = this.state.taskList;
    a.splice(elementID, 1);
    this.setState({
      taskList: a
    });
  }

  markItemDone = (elementID) => {
    this.state.completedTaskList.push(this.state.taskList[elementID]);
    this.deleteItem(elementID);
  }

  render() {
    return (<div className="App">
      <TodaysDate />
      <TaskList taskList={this.state.taskList} completedTaskList={this.state.completedTaskList} addItem={this.addItem} deleteItem={this.deleteItem} markItemDone={this.markItemDone} />
    </div>)
  }
};

export default App;
