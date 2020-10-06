import React from 'react';
import TasksListItem from '../task_list_item/task_list_item';



const TasksList = ({ tasksList, onImportant, onDone, onDeleteItem }) => {

    return (
        tasksList.map((item) => {
            const { id, done, important } = item;

            return (
                <TasksListItem
                    key={id}
                    item={item}
                    done={done}
                    important={important}
                    onImportant={() => onImportant(id)}
                    onDone={() => onDone(id)}
                    onDeleteItem={() => onDeleteItem(id)} />
            );
        })
    );
};


export default TasksList;