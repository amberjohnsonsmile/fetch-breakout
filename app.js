var baseUrl = "https://drageons.herokuapp.com/"

fetch(baseUrl + "character")
	.then(response => response.json())
	.then(response => {
		var name = response[0].name;
		console.log(response[0]);
		console.log(name);
	})
	.catch(error => {
		console.log(error);
	})
