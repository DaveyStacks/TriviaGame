var answerKey = {
    one: "a",
    two: "d",
    three: "b",
    four: "c",
    five: "d"
};

var correctAnswer = 0;
var incorrectAnswer = 0;
var defaultTime = 60;
var counter = defaultTime;

var startGame = function () {
    $("#counter").html(counter);
    var timer = setInterval(function () {
        $("#counter").html(--counter);
        if (counter == 0) {
            clearInterval(timer);
            $("#target").submit();
        }
    }, 1000);
    counter = defaultTime;
    incorrectAnswer = 0;
    correctAnswer = 0;
    $("#correctness").html(correctAnswer);
    $("#wrongness").html(incorrectAnswer);
}
$(startGame);

$("#target").submit(function (event) {
    $(this).find(":checked").each(function (index, input) {
        var question = input.name;
        var val = answerKey[question];
        if (input.value === val) {
            correctAnswer++;
        }
    });
    var numQuestions = Object.keys(answerKey).length;
    incorrectAnswer = numQuestions - correctAnswer;
    $("#correctness").html(correctAnswer);
    $("#wrongness").html(incorrectAnswer);
    event.preventDefault();

});

$("#resetButton").click(function () {
    startGame();
});
