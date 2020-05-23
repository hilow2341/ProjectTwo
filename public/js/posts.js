$(document).ready(function(){
  // $(".change-sleep").on("click", function(event) {
  //   var id = $(this).data("id");
  //   var newSleep = $(this).data("newsleep");

  //   var newSleepState = {
  //     sleepy: newSleep
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "PUT",
  //     data: newSleepState
  //   }).then(
  //     function() {
  //       console.log("changed sleep to", newSleep);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

    $("#newPost").submit(function(event){
    console.log('here');
      event.preventDefault();
        var newPost = {
            title: $("#modalInput").val().trim(),
            body: $("#modalInput").val().trim()
        }
        $.ajax("/api/reviews", {
            type: "POST",
            data: newPost
        }).then(function(res){
            console.log("create review", res);
            // location.reload();
            $('#review').text(res.body)
        })

  });

  function updateReview(review) {
    $.ajax({
      method: "GET",
      url: "/api/reviews",
      data: post
    })
      .then(function() {
        window.location.href = "/index";
      });
  }

});