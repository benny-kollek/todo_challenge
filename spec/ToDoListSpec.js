describe("ToDoList", function() {

  describe("Back End", function (){
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

  describe("Front End", function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = './';
      loadFixtures('../index.html')
    });

    it("has input field", function() {
      expect($('#input-field')).toBeInDOM();
    });

    it("has enter task button", function() {
      expect($('#enter-task-button')).toBeInDOM();
    });

    it("has a table of tasks", function() {
      expect($('#tasks-table')).toBeInDOM();
    });

    it("updates task table when user inputs tasks", function() {
      $('#input-field').val('Walk the dog');
      $('#enter-task-button').trigger('click');
      $('#input-field').val('Work out');
      $('#enter-task-button').trigger('click');
      expect($('#tasks-table')).toContainText('Walk the dog');
      expect($('#tasks-table')).toContainText('Work out');
    });
  });
});
