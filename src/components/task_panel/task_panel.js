import React, { Component } from 'react';



class TaskPanel extends Component {

    state = {
        label: ""
    };


    onChange = (event) => {
        this.setState({ label: event.target.value })
    };

    onAddBtnClick = (event) => {
        event.preventDefault()
        this.props.onAddTask(this.state.label);
        this.setState({ label: "" });
    };


    render() {

        return (
            <form
                onSubmit={this.onAddBtnClick}
                className="my-5 mx-1 row d-flex align-items-baseline justify-content-between" >
                <input
                    value={this.state.label}
                    onChange={this.onChange}
                    className="form-control col-12 col-sm-8 "
                    placeholder="Add new task">
                </input>

                <button
                    className="btn blue-gradient col-12 mx-0 col-sm-3 col-md-2">Add</button>
            </form>
        )
    };
};


export default TaskPanel;