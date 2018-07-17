import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  store: service(),
  taskEditor: service(),
  taskSelector: service(),
  isEditMode: alias('taskEditor.hasTask'),

  actions: {
    createTask() {
      let newTask = this.store.createRecord('task');
      newTask.save();
      this.taskSelector.select(newTask);
      setTimeout(() => this.taskEditor.setCurrentTask(newTask), 0);
    },

    saveTask(task) {
      task.save();
    },

    completeTask(task) {
      task.complete();
      task.save();
    },

    uncompleteTask(task) {
      task.uncomplete();
      task.save();
    }
  }
});