$(document).ready(function(){

  // Refs
  var inputText = $('#textInput');
  var btnSub = $('#submit');
  var todoList = $('.todoList');


  // API
  var apiUrl = 'http://157.230.17.132:3020/todos';

  // Handlebars
  var source = $('#todo-template').html();
  var template = Handlebars.compile(source);

  // actions
  // get todos

  printAll(apiUrl, todoList, template);



});//ready


// ************************
// ******* Functions ******
// ************************


function printAll(apiUrl, todoList, template) {
  // reset
  todoList.html('');

  $.ajax({
    url : apiUrl,
    method : 'GET',
    success : function(data){
      for(i=0; i < data.length;i++) {
        var todo = data[i];
        console.log(todo);
        var context = {
          todo : todo.text,
          id : todo.id
        }

        var html = template(context);

        todoList.append(html);

      } // for
    }, error : function() {
      console.log('Errore nella richiesta');
    }
  });

};//printAll
