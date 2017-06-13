import { observable, useStrict, extendObservable } from 'mobx';
useStrict(true);
class ToDoStore {

    constructor() {
        extendObservable(this, {
            tasksList: ['Learn reactJS', 'Learn ES6'],
            removeTask: removeTask(),
        })
    }

    removeTask = (text) => {
        const updatedTasks = ToDoStore.tasksList;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({
            tasks: updatedTasks,
        });
    }
}
const toDoStore = new ToDoStore();
export default toDoStore;



