var guessnum = document.getElementById("guessnum")
var score = document.querySelector(".score")
var result = document.getElementById("result")
var stat = document.getElementById("status")
var randomNumber = Math.floor(Math.random()*10)+1
var totalScore = 10

function check()
{
    var enteredNumber = guessnum.value

    if(enteredNumber==randomNumber)
    {
        console.log("Right")
        result.textContent="You are Right!"
        result.style.color = "lightgreen";
        stat.textContent="You have Won"
        stat.style.color = "lightgreen";
        score.style.fontWeight="bold"
        alert("Won in Style!!")
    }

    else
    {
        console.log("Wrong")
        totalScore=totalScore-1
        score.textContent="Score:"+totalScore
        result.textContent="You are Wrong!"
        result.style.color = "crimson";
        stat.textContent="You are Losing"
        stat.style.color = "crimson";
        score.style.fontWeight="bold"
    }

}