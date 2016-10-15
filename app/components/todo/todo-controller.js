(function(){
	var todoService = new TodoService
	var list = todoService.getTodos()
	drawTodo()
	
	
	function drawTodo(){
		countElem = $('#count');
		todoElem = $('#todoList');
		var todo = $('#input-box').val()
		if(todo != ''){
			list.push(todo)
		}
		var template = ''
		var template2 = ''
		for(var i = 0; i < list.length; i++){
			template2 = `<h5>Count: ${list.length}</h5>`;
		
		}
		countElem.empty().append(template2)
		for(var i = 0; i < list.length; i++){
			template += `<label><input type="checkbox" value="">${list[i]}</label></br>`
		}

		todoElem.empty().append(template)
		todoService.saveTodos(list)
		list = todoService.getTodos()
		
	}

	$('#addButton').on('click', function(){
		drawTodo()
	})
		
}())

		



	




	
	
	
