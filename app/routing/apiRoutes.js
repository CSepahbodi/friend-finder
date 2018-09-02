var friendData = require('../app/data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res) {
    var thisUser = req.body;
    var differences = [];
    console.log(thisUser);

    if (friendData.length > 1) {
    friendData.forEach(function(user) {
        var totalDifference = 0;

    for (var i = 0; i < thisUser.scores.length; i++) {
        var otherAnswer = user.scores[i];
        var thisAnswer = thisUser.scores[i];
        var difference = otherAnswer - thisAnswer;
        totalDifference += Math.abs(difference);
    }

    differences.push(totalDifference);
});

    var minimumDifference = Math.min.apply(null, differences);

    var bestMatches = [];

    for (var i = 0; i < differences.length; i++) {
        if (differences[i] === minimumDifference) {
            bestMatches.push(friendData[i]);
        }

    }
 friendData.push(thisUser);
    res.json(bestMatches[0]);
} else {
     friendData.push(thisUser);
    res.json(friendData[0]);
}

    friendData.push(thisUser);

});
};
