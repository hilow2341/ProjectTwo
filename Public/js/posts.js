$(document).ready(function(){

var bodyInput = $("#body");
var titleInput = $("#title");
var modalForm = $("#modalForm");

var postConsoleSelect = $("#console");

postConsoleSelect.val("Choose Console");

$(modalForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
   
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newReview = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim(),
      console: postConsoleSelect.val()
    };

    console.log(newReview);

  });
 function submitReview(review) {
    $.review("/api/posts/", Post, function() {
      window.location.href = "/index";
    });
  }
  function updateReview(review) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function() {
        window.location.href = "/index";
      });
  }

});