//Simon Game

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

// Start the Game

$(document).keydown(function(event) {

  $("h1").text("Level 0");
  nextSequence();

  $("body").removeClass('game-over');

});

// Reserved Functions

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  flashButton(randomChosenColor);
  playSound(randomChosenColor);

  $("h1").text("Level " + level);

  level++;

  userClickedPattern = [];

}

$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  flashButton(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel) {

  var x = currentLevel;

  if (gamePattern[x] == userClickedPattern[x]) {

    console.log("success");

    if (gamePattern.length === userClickedPattern.length) {

      setTimeout(nextSequence, 1000);

    }
  }

  else {
    console.log("fail");
    playSound("wrong");

    $("body").addClass('game-over');

    $("h1").text('Game Over, Press Key to Restart');

    startOver();
  }

}

//restart gamePattern

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}

//function for playing sound

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

//function for flashing button

function flashButton(name) {

  $("#" + name).fadeOut(100).fadeIn(100);

}
