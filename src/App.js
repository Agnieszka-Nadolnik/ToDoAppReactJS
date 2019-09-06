import React, { Component } from 'react';
import AnimationPage from './components/Animation';
import Add from './components/Add';
import ToDoList from './components/ToDoList';

class App extends Component {

  counter = 3;
  state = {
    tasks: [
    ]
}

handleDeleteTask = (id) => {
console.log('usunięte' + id)
const tasks = [...this.state.tasks];
const index = tasks.findIndex(task => task.id === id)
tasks.splice(index,1);

this.setState({
  tasks
})

}
handleChangeTaskStatus = (id) => {
  console.log('edycja' + id);
  const tasks = Array.from(this.state.tasks);
  tasks.forEach(task => {
    if(task.id === id) {
      task.active = false;
      task.finishDate = new Date().toLocaleDateString();
    }
  }) 

  this.setState({
    tasks
  });
}

addTask = (text, date) => {
  const task = {
    id: this.counter,
    text: text,
    date: date,
    active: true,
    finishDate: null,
  }

  this.counter++;

  this.setState(prevState => ({
    tasks: [...prevState.tasks, task]
  }))
  return true;
}
    render() {
        return(
            <div className='wrapper'>
              <AnimationPage/>
              <section className="task_container">
                <Add add={this.addTask}/>
                <ToDoList tasks={this.state.tasks} delete = {this.handleDeleteTask} change={this.handleChangeTaskStatus}/>
              </section>
            </div>
        )
    }
}

export default App;

