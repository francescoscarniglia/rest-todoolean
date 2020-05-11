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

  // create toto item

  btnSub.click(function(){
    var newVal = inputText.val().trim();
    $.ajax({
      url : apiUrl,
      method : 'POST',
      data: {
        text : newVal
      }, success : function() {
          printAll(apiUrl, todoList, template);
      }, error : function() {
        console.log('Errore nella lista');
      }
    });
  });//click

  // delete this
  $(document).on('click', '.delete', function(){
    var todoId = $(this).data('id');

    $.ajax({
      url : apiUrl + '/' + todoId,
      method : 'DELETE',
      success : function() {
          printAll(apiUrl, todoList, template);
      }, error : function() {
        console.log('errore');
      }
    });
  })//on

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
        //console.log(todo);
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
