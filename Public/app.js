
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


	// var settings = {
	// 	"async": true,
	// 	"crossDomain": true,
	// 	"url": "https://cors-anywhere.herokuapp.com/https://chicken-coop.fr/rest/games?title=" + title,
	// 	"method": "GET",
	// 	"headers": {
	// 		"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
	// 		"x-rapidapi-key": "2a3d915d9fmsh97046c7b26f3582p13d051jsndd231ed74692"
	// 	}
	// }

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://cors-anywhere.herokuapp.com/https://chicken-coop.fr/rest/games/" + title + "?&amp;selectors[]=title&amp;selectors[]=genre&amp;selectors[]=score&amp;selectors[]=alsoAvailableOn&amp;selectors[]=image&amp;selectors[]=description",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
			"x-rapidapi-key": "2a3d915d9fmsh97046c7b26f3582p13d051jsndd231ed74692"
		}
	}

	
	$.ajax(settings).then(function (response) {
		console.log(response);
		// for (let i=0; i < response.result.length; i++) {
		// 	console.log("test", response.result[i])
			//let title = response.result.title;
			$("#spacing").text(response.result.title);
			console.log(response.result.image);
			//console.log(response.result.score);
			$("#score").text(response.result.score);
			$("#gameImage").attr("src", response.result.image);
		
			// settings.url = "https://cors-anywhere.herokuapp.com/https://chicken-coop.fr/rest/games/" + game + "?&amp;selectors[]=title&amp;selectors[]=genre&amp;selectors[]=score&amp;selectors[]=alsoAvailableOn&amp;selectors[]=image&amp;selectors[]=description"
			// $.ajax(settings).then(function (gameResponse) {
			// 	console.log("test", gameResponse)
			// });
			
		
		// response.forEach(response => {
		// 	var gameDiv = $("<h4>").addclass("button is-link is-light")
		// 	var gameP = $("<p>")

		// 	//Display title of videogame
		// 	gameDiv.text(response.result[0].title)
		// 	$(".modal-title").append(gameDiv)
		// 	//Display game platform
		// 	gameP.text(response.result.platform)
			


		
	
		//});
	}).catch(function (err) {
		console.log(err)
	})
	

});