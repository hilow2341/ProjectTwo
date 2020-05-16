$("#").on("click", function () {
	$("#").empty()

	var videoGames = [];
	$(".input").each(function () {
		videoGames.push($(this).val());
	});

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://chicken-coop.p.rapidapi.com/games/%7Btitle%7D?platform=pc",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
			"x-rapidapi-key": "2a3d915d9fmsh97046c7b26f3582p13d051jsndd231ed74692"
		}
	}
	
	$.ajax(settings).then(function (response) {
		console.log(response);
		response.forEach(response => {
	
		});
	});
	

});