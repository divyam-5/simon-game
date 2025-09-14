/*
var buttonColor=["red","blue","green", "yellow"]
var GamePattern=[]
function nextsequence()
{
    var randomNumber=Math.floor((Math.random())*4)
    var randomChosenColor = buttonColor[randomNumber]
    GamePattern.push(randomChosenColor)

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)


    var audio = new Audio("sounds/"+randomChosenColor+".mp3")
    audio.play()
    
}
    */

var userClickedPattern=[]
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var level =0
var started= false

$(document).keydown(function(){
    if(!started)
    {
        $("#level-title").text("level = 0")
        nextSequence()
        started=true
    }
})


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
    animatePress(userChosenColour)

})


function nextSequence()
{

    //reseting the pattern array
  userClickedPattern=[] 
  level+=1
  $("#level-title").text("level = "+level)

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColour)

}

function playSound(name){
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
}

function animatePress(currentColour)
{
   $("#"+currentColour).addClass("pressed")
    setTimeout(function(){$("#"+currentColour).removeClass("pressed")},100)
}

function checkAnswer(currentLevel)
{
 if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
 {
    console.log("success")
 
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function(){
                nextSequence()},1000)
        }
}
 else
 {
    console.log("wrong")
    $("#level-title").text("game over, press any key to restart")
    playSound("wrong")
    $("body").addClass("game-over")
    setTimeout(function(){
    $("body").removeClass("game-over")
    },200)
    startOver()


 }
}
function startOver()
{
    level=0,
    gamePattern=[],
    started=false

}














