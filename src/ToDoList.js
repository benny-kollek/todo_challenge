function ToDoList() {
  this.tasks = [];
}
ToDoList.prototype.addTask = function(text) {
  this.tasks.push(text);
};
