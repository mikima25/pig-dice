var player1 = new Player("playerOne");
var player2 = new Player("playerTwo");

function Player(name) {
  this.name = name;
  this.score = 0;
}
Player.prototype.increaseScore = function(score) {
  this.score += score;
}
var dieFace = function() {
  return Math.floor((Math.random() * 6) + 1);
};

//front-end
$(document).ready(function() {
    
}
