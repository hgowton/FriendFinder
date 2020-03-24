// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//links to friends.js with json data
friends = require('../data/friends')

var bestFriend = 0;
var bestFriendName = "";

var scoresArray = [];

//cycles through all friends to calculate the difference within the surveys
function math (newFriend) {
    for (i = 0; i< friends.length; i++) {
        var friendScore = 0;

        for (j = 0; j<friends[i].scores.length; j++){
            friendScore += (Math.abs(friends[i].scores[j] - newFriend.scores[j]));
        }
        scoresArray.push(friendScore);
    }
    
    console.log("scores Array: " + scoresArray)
} 

//cycles through the scores array to determine the friend with the closest match in survey results
function findFriend() {
    for (i = 0; i <scoresArray.length; i++) {
        if(scoresArray[i] < scoresArray[bestFriend]) {
            bestfriend = i;
        }
    }
    console.log(friends[bestfriend])
    bestFriendName = friends[bestfriend].name
    console.log("Best Friend: " + bestFriendName + "\n Number: ")
    return friends[bestfriend]
}

module.exports = function(app){
    app.get('/api/friends', function(req,res) {
        return res.json(friends)
    })
    
    app.post('/api/friends', function(req,res){
        var newFriend = req.body;
        newFriend.scores.forEach(function (score, i, arrayScore) {
            arrayScore[i] = parseInt(score);
        })
        math(newFriend)
        var newestFriend = findFriend();
        friends.push(newFriend);
        res.json(newestFriend);

    })

}