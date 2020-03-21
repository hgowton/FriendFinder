// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//links to friends.js with json data
friends = require('../data/friends')

function math () {
    //create a for loop running all friends through math problem
    //parse all score values for user
}

//match question values up from friend to user
//find the absolute value and final sum

function math (newFriend) {
    var highScore = 0;
    var bestFriend = '';

    //from friends
    var diff = [];
    for (i = 0; i< friends.length; i++) {
        for (j = 0; j<friends[i].scores.length; j++){
            diff.push(Math.abs(friends[i].scores[j] - newFriend.scores[j]));
        }
    }
    // console.log("difference array: " + diff)
    // console.log(diff[2])
    total(diff);
}

function total(diff) {
    var friendScore = 0;
    for (i = 0; i < diff.length; i++) {
        friendScore += diff[i];
    }
    console.log("friendScore: " + friendScore)
}

module.exports = function(app){
    app.get('/api/friends', function(req,res) {
        return res.json(friend)
    })
    
    app.post('/api/friends', function(req,res){
        var newFriend = req.body;
        newFriend.scores.forEach(function (score, i, arrayScore) {
            arrayScore[i] = parseInt(score);
        })
        math(newFriend)
        total();
        friends.push(newFriend);
        console.log(newFriend);

        res.json(newFriend);
    })
}