describe("Player", function() {

  beforeEach(function() {
    taskList = new ToDoList;
  });

  it("should start with no tasks", function() {
    expect(taskList.tasks.length).toEqual(0);
  });

  it("can add a task", function() {
    taskList.addTask("Walk the dog");
    taskList.addTask("Work out");
    expect(taskList.tasks[0]).toEqual("Walk the dog");
    expect(taskList.tasks[1]).toEqual("Work out");
  });
});
