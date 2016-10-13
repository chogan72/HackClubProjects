function sayThatWasEasy() {
var ThatWasEasy = new Audio("that_was_easy.mp3");
ThatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);