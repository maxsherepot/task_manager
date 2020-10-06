import React, { Component } from 'react';
import TasksList from './tasks_list/tasks_list';
import TaskPanel from './task_panel/task_panel';



class App extends Component {

    state = {
        works: JSON.parse(localStorage.getItem("works"))
    };


    createItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: Math.random(100)
        };
    };

    onAddTask = (value) => {
        const newTask = this.createItem(value);
        if (localStorage.getItem("works") == null) {
            const works = [];
            works.push(newTask);
            localStorage.setItem("works", JSON.stringify(works));
        } else {
            const works = JSON.parse(localStorage.getItem("works"));
            works.push(newTask);
            localStorage.setItem("works", JSON.stringify(works));
        };

        this.setState({
            works: JSON.parse(localStorage.getItem("works"))
        })
    };

    onDeleteItem = (id) => {
        const list = JSON.parse(localStorage.getItem("works"));
        const index = list.findIndex((el) => el.id === id);
        list.splice(index, 1);
        this.setState({ works: list });
        localStorage.setItem("works", JSON.stringify(list));
    };

    toggleFunc(arr, id, propName) {
        const index = arr.findIndex((element) => element.id === id);
        const oldItem = arr[index];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        return (
            [...arr.slice(0, index),
                newItem,
            ...arr.slice(index + 1)]
        );
    };

    onDone = (id) => {
        const done = this.toggleFunc(JSON.parse(localStorage.getItem("works")), id, "done");
        localStorage.setItem("works", JSON.stringify(done));

        this.setState(({ works }) => {
            return { works: this.toggleFunc(works, id, "done") };
        });
    };

    onImportant = (id) => {
        const important = this.toggleFunc(JSON.parse(localStorage.getItem("works")), id, "important");
        localStorage.setItem("works", JSON.stringify(important));

        this.setState(({ works }) => {
            return { works: this.toggleFunc(works, id, "important") };
        });
    };


    render() {
        return (
            <div className="container">
                <TaskPanel
                    onAddTask={this.onAddTask} />
                <TasksList
                    tasksList={this.state.works}
                    onImportant={this.onImportant}
                    onDone={this.onDone}
                    onDeleteItem={this.onDeleteItem} />
            </div>
        );
    };
};


export default App;