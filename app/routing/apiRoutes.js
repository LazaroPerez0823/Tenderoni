var makeFriends = require('../data/friends.js');

module.exports = app => {

  app.get('/api/friends', function (req, res) {
    res.json(makeFriends);
  });


  app.post('/api/friends', function (req, res) {

    var newFriend = req.body;


    newFriend.scores.forEach(stuff => {

      
  
          stuff.scores = parseInt(stuff.scores);
      
      })


    var compared = [];

    for(var i = 0; i < makeFriends.length; i++) {

      var comparedFriend = makeFriends[i];

      var totalDifference = 0;
      
      for(var k = 0; k < comparedFriend.scores.length; k++) {

        var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
        totalDifference += differenceOneScore;
      }

      compared[i] = totalDifference;
    }

    var bestFriendNum = compared[0];
    var bestMatch = 0;

    for(var i = 1; i < compared.length; i++) {
      if(compared[i] < bestFriendNum) {
        bestFriendNum = compared[i];
        bestMatch = i;
      }
    }

    makeFriends.push(newFriend);
    res.json(makeFriends[bestMatch]);
  });
};