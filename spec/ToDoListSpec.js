describe("Player", function() {

  it("should start with no tasks", function() {
    taskList = new ToDoList;
    expect(taskList.tasks.length).toEqual(0);
  });
});
