$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var newTask = $("input#userTask").val();
  });
});
