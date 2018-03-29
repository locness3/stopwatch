var seconds = document.getElementById("seconds");
var lol;
var countUp = function() {
  var time = parseFloat(seconds.textContent);
  seconds.textContent = time + 1;
};

var startCountUp = function() {
  interval = window.setInterval(countUp, 1000);

}

var stopCountUp = function() {
  window.clearInterval(interval);
};

var reset = function() {
  window.clearInterval(interval);
  seconds.textContent = 0;
}
var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startCountUp);
var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", reset);
