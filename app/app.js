var myApp = angular.module('app', ['ngRoute']);

myApp.config(function($routeProvider){
  
  // $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: "views/home.html",
    })
    .when('/addtask', {
      templateUrl: "views/addTask.html",
      controller: "taskController"
    })
    .when('/contact', {
      templateUrl: "views/contact.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});

myApp.controller('taskController', function($scope) {

  $scope.editMode = false;

  $scope.tasks = [
    {
      name: "Task 1",
      deadline: "10/02/2021"
    },
    {
      name: "Task 2",
      deadline: "12/02/2021"
    },
    {
      name: "Task 3",
      deadline: "10/04/2021"
    },
    {
      name: "Task 4",
      deadline: "10/10/2021"
    },
  ];

  $scope.newTask={};

  $scope.addTaskHandler = function(task) {

    
    if(!task.deadline || !task.name){
      return;
    }

    let date = task.deadline.getFullYear()+'-'+(task.deadline.getMonth()+1)+'-'+task.deadline.getDate();

    $scope.tasks.push({
      name: task.name,
      deadline: date
    });

    task.deadline="";
    task.name="";

  };

  $scope.deleteTask = function(task) {
    let index = $scope.tasks.indexOf(task);

    $scope.tasks.splice(index, 1);
  }

  $scope.editTask = function(task){
    let index = $scope.tasks.indexOf(task);

    $scope.editMode = true;

    console.log("Editi mode on", index);

    $scope.task.name = $scope.tasks[index].name;
    $scope.task.deadline = $scope.tasks[index].deadline;
  }

});