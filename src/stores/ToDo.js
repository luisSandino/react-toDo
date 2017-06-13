import { useStrict, extendObservable, observable } from 'mobx';
useStrict(true);

class ToDoStore {
    constructor() {
        extendObservable(this, {
            tasksList: [],
        }) 
    }

    removeTask = (taskIndex) => {
        console.log("Ya me reconoce la funcion de remover task", taskIndex)
        const updatedTaskList = this.tasksList.splice(taskIndex, 1);
        this.tasksList = updatedTaskList;
        console.log("Actual tareas ", updatedTaskList)
    }
}
const toDoStore = new ToDoStore();
export default toDoStore;



