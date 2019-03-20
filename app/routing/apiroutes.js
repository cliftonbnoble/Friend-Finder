//Load Data Sources

let friendsData = require("../data/friends");

//Routing

//API GET Requests
module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    });


//API POST Requests
app.post("/api/friends", function (req, res) {
    friendsData.push(req.body);
    res.json(true)
});
};