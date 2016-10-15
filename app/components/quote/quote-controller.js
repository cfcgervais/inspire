(function(){
	var quoteService = new QuoteService
	quoteService.getQuote(drawQuote)
	
	function drawQuote(data){
		quoteElem = $('#quote');
		var data = JSON.parse(data)
		var template = `<h3 class="yeah">${data.quote}</h3>
						<div class="hoverme"><h4>-${data.author}</h4></div>`
		quoteElem.append(template)
	}
}())
		
	
	
	
