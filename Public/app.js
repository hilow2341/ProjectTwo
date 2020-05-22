
//This is for our modal
document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

$(".box ").on("click",function(){
document.querySelector('.bg-modal').style.display = "flex";	
});


//This is our api
$("#search").on("click", function (event) {
	console.log(event);
	event.stopPropagation();
	event.preventDefault();

	document.querySelector('.bg-modal').style.display = "flex";		

	var title = $("#searchTitle").val();


	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://cors-anywhere.herokuapp.com/https://chicken-coop.fr/rest/games?title=" + title,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
			"x-rapidapi-key": "2a3d915d9fmsh97046c7b26f3582p13d051jsndd231ed74692"
		}
	}
	
	$.ajax(settings).then(function (response) {
		console.log(response);
		for (let i=0; i < response.result.length; i++) {
			let game = response.result[i];
			settings.url = "https://cors-anywhere.herokuapp.com/https://chicken-coop.fr/rest/games/" + game.title + "?platform=" + game.platform + "&amp;selectors[]=title&amp;selectors[]=genre&amp;selectors[]=score&amp;selectors[]=alsoAvailableOn&amp;selectors[]=image&amp;selectors[]=description"
			$.ajax(settings).then(function (gameResponse) {

			});
			break;
		}
		response.forEach(response => {
			var gameDiv = $("<h4>").addclass("button is-link is-light")
			var gameP = $("<p>")

			//Display title of videogame
			gameDiv.text(response.result.title)
			$("#").append(gameDiv)
			//Display game platform
			gameP.text(response.result.platform)
			


		
	
		});
	});
	

});