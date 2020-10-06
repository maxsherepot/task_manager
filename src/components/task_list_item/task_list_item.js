import React from 'react';
import "./task_list_item.css";



const TasksListItem = ({ item, onImportant, important, onDone, done, onDeleteItem }) => {

    let className = "overflow-auto";
    if (important) className += " text-important";
    if (done) className += " text-done";

    return (
        <div className="jumbotron p-3 border bg-light">
            <h3 className={className}
                important={important}
                done={done}
            >{item.label}</h3>

            <hr></hr>

            <div className="row">
                <button
                    onClick={onImportant}
                    className="btn btn-sm btn-primary col-12 mx-0 mx-md-1 col-md-2">Important</button>
                <button
                    onClick={onDone}
                    className="btn btn-sm btn-success col-12 mx-0 mx-md-1 col-md-2">Done</button>
                <button
                    onClick={onDeleteItem}
                    className="btn btn-sm btn-danger col-12 mx-0 mx-md-1 col-md-2">Delete</button>
            </div>
        </div>
    );
};


export default TasksListItem;

