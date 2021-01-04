var secretNum = 6;
var guessedNum = Number(prompt("Guess the secret number"));

if ( secretNum === guessedNum)
{
alert("Bingo! Correct answer");
}
else if (++secretNum === guessedNum)
{
    alert("Close enough to the correct answer");
}    