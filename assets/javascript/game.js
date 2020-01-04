    // Loads the game
    $(document).ready(function() {
        
    var crystalArray = [2, 5, 7, 10];
    
    // Assigns each crystal a random number
    // Been fiddling with the codes for hours and no matter what I do, I can't get Math.random to use any of the numbers in my array using crystalArray.length. Again, I'm sure the solution is very simple, I'm just not seeing it. I'll keep trying, but for now this somewhat allows the game to function the way it should.
    for (var i = 0; i < crystalArray.length; i++);
        var crystalNumber1 = Math.floor(Math.random() * (10) + 2);
        console.log(crystalNumber1);
    for (var i = 0; i < crystalArray.length; i++);
        var crystalNumber2 = Math.floor(Math.random() * (10) + 2);
        console.log(crystalNumber2);
    for (var i = 0; i < crystalArray.length; i++);
        var crystalNumber3 = Math.floor(Math.random() * (10) + 2);
        console.log(crystalNumber3);
    for (var i = 0; i < crystalArray.length; i++);
        var crystalNumber4 = Math.floor(Math.random() * (10) + 2);
        console.log(crystalNumber4);

    // Computer picks and displays a random number
        var computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#number").html(computerNumber);
        console.log(computerNumber);
        var lockgame=false;

    // The score is tracked
        var wins = 0;
        var loss = 0;

        let scoreTotal = 0;
        $("scoreTotal").text(scoreTotal);

        function win() {
        wins = wins + 1;
            $("#wins").text(wins);
        }
        function lose() {
        loss = loss + 1;
            $("#loss").text(loss);
        }

    // On click functions for each crystal, win/lose alerts
        $("#crystal1").click(() => {
        scoreTotal = scoreTotal + crystalNumber1
        $("#scoreTotal").text(scoreTotal);
        if (scoreTotal == computerNumber) {
            alert("Congratulations, you've won the game!")
            win();
            reset();
        } else if (scoreTotal > computerNumber) {
            alert("Sorry, you've lost the game! Try again.")
            lose();
            reset();
        }
    });

        $("#crystal2").click(() => {
        scoreTotal = scoreTotal + crystalNumber2
        $("#scoreTotal").text(scoreTotal);
        if (scoreTotal == computerNumber) {
            alert("Congratulations, you've won the game!")
            win();
            reset();
        } else if (scoreTotal > computerNumber) {
            alert("Sorry, you've lost the game! Try again.")
            lose();
            reset();
        }
    });
        $("#crystal3").click(() => {
        scoreTotal = scoreTotal + crystalNumber3
        $("#scoreTotal").text(scoreTotal);
        if (scoreTotal == computerNumber) {
            alert("Congratulations, you've won the game!")
            win();
            reset();
        } else if (scoreTotal > computerNumber) {
            alert("Sorry, you've lost the game! Try again.")
            lose();
            reset();
        }
    });
        $("#crystal4").click(() => {
        scoreTotal = scoreTotal + crystalNumber4
        $("#scoreTotal").text(scoreTotal);
        if (scoreTotal == computerNumber) {
            alert("Congratulations, you've won the game!")
            win();
            reset();
        } else if (scoreTotal > computerNumber) {
            alert("Sorry, you've lost the game! Try again.")
            lose();
            reset();
        }
    });

    // Resets the game
        function reset () {
            scoreTotal = 0;
            $("#scoreTotal").text(scoreTotal);
            computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            $("#number").text(computerNumber);
        }
});