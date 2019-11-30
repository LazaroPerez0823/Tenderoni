// Your apiRoutes.js file should contain two routes:

module.exports = app => {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    var friends = require("../data/friends");

    app.get("/api/friends", function(req, res) {
        res.json(user);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results.
    // app.post("/api/friends", (req, res) => {

    // });
}