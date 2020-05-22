var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/reviews/", function(req, res) {
    db.Review.findAll({})
      .then(function(dbReview) {
        res.json(dbReview);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/reviews/category/:category", function(req, res) {
    db.Review.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbReview) {
        res.json(dbReview);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/reviews/:id", function(req, res) {
    db.Review.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbReview) {
        res.json(dbReview);
      });
  });

  // POST route for saving a new post
  //new code 
  app.post("/api/reviews", function(req, res) {
    db.Review.create({
      title: req.body.title,
      body: req.body.body,
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then(function(dbReview) {
        res.json(dbReview);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/reviews/:id", function(req, res) {
    db.Review.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbReview) {
        res.json(dbReview);
      });
  });

  // PUT route for updating posts
  app.put("/api/reviews", function(req, res) {
    db.Review.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbReview) {
        res.json(dbReview);
      });
  });
};