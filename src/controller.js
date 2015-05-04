toDoList = new ToDoList;

function addATask(){
  toDoList.addTask($('#input-field').val());
  $('#input-field').val('');
  refreshTable();
};

function removeATask(taskNumber){
  toDoList.tasks.splice(taskNumber,1);
  refreshTable();
};

function refreshTable(){
  $('#tasks-table').html('');
  for(i=toDoList.tasks.length-1;i>=0;i--){
    newRow = '<tr><td onclick="removeATask(' + i + ')" id="task' + i +'">' + toDoList.tasks[i] + '</td></tr>';
    console.log(newRow);
    $('#tasks-table').append(newRow);
  };
};
