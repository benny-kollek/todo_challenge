function ToDoList() {
  this.tasks = [];
}
Player.prototype.addTask = function(text) {
  this.tasks.append = text;
};
