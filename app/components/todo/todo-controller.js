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
			template += `<button id="remove">X</button><label>${list[i]}</label></br>`
		}

		todoElem.empty().append(template)
		todoService.saveTodos(list)
		list = todoService.getTodos()
		
	}
		function deleteTodo(){
			for(i=0; i < list.length; i++){
				var item = list[i]
				if(item == item){
				list.splice(i,1)
				todoService.saveTodos(list)
				}
			}
		}

	$('#remove').on('click', function(){
		deleteTodo()
	})

	$('#addButton').on('click', function(){
		drawTodo()
	})

}())
	
		
		
		
			
            







	




	
	
	
