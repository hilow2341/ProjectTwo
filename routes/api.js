//Refrence app.js
//
//^^^^^^^^^^

$("#").on("click", function () {
	$("#").empty()

	var requests = [];
	$(".input").each(function () {
		requests.push($(this).val());
	});

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://chicken-coop.fr/rest/games?title=[TITRE]",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
			"x-rapidapi-key": "2a3d915d9fmsh97046c7b26f3582p13d051jsndd231ed74692"
		}
	}
	
	$.ajax(settings).then(function (response) {
		console.log(response);
		response.forEach(response => {
			var videoGame
	
		});
	});
	

});