function ImageService() {
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random';
	var apiUrl = 'https://source.unsplash.com/random';

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you use this?
		return $.get(apiUrl, function (res) {
			console.log('Image Data:', res)
			//What are you going to do with the image that comes back?
			$.get(apiUrl, callWhenDone)
		})
	}
}
			
