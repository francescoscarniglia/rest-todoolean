$(document).ready(function(){

  // Refs
  var inputText = $('#textInput').val();
  var btnSub = $('#submit');
  var todoList = $('.todoList');
  var todo = $('.todo');

  // API
  var apiUrl = '157.230.17.132:3020/todos';

  // Handlebars
  var source = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);


});//ready
