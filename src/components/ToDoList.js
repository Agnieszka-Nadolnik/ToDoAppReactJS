import React from 'react';
import Task from './Task';


const ToDoList = (props) => {
    const active = props.tasks.filter(task => task.active === true);
    const done = props.tasks.filter(task => task.active === false);

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

        return(
            <section className="all_lists">
                <div className="to_do_list" id='test'>
                    <h4>Lista zadań</h4>
                    {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
                </div>
                <div className="done_task_list">
                    <h5>Zadania zakończone</h5>
                    {doneTasks}
                </div>
            </section>
        )
}

export default ToDoList