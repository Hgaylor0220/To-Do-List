// Biz Logic

function taskList() {
  this.tasks = [],
  this.currentId = 0
}

taskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);

}

taskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

taskList.prototype .findTask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]){
      if(this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

function Task (task) {
  this.task = task
}

taskList.prototype.deleteTask =function(task) {
    for (var i=0; i< this.task.length; i++){
      if(this.task[i]){
        if(this.task[i].id == id){
          delete this.task[i];
          return true;
    }
  }
};
  return false;
}

// UI Logic

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#userTask").val();
    var newTask = new Task(inputtedTask);

    $(".taskList").append("<li>" + newTask.task + "</li>");
    console.log(newTask);
  });
});
