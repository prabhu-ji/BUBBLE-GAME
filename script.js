var timer = 30;
var score = 0;
var hitrn = 0;
var bubbleCount = 208; // Define bubble count as a variable

function makeBubble() {
  var clutter = "";
  for (var i = 0; i < bubbleCount; i++) {
    var r = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble" data-value="${r}">${r}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var t = setInterval(function() {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerbox").textContent = timer;
    } else {
      clearInterval(t);
      document.querySelector("#pbtm").innerHTML = "<h1>GAME OVER</h1>";
      showScore();
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
  var clickedBubble = dets.target;
  
  if (clickedBubble.classList.contains('bubble')) {
    var clickedValue = Number(clickedBubble.getAttribute('data-value'));

    if (clickedValue === hitrn) {
      increaseScore();
      clickedBubble.style.backgroundColor = "green"; // Change background color to green
      setTimeout(function() {
        clickedBubble.style.backgroundColor = ""; // Reset background color after 200 milliseconds
        makeBubble();
        getNewHit();
      }, 200);
    } else {
      decreaseScore();
      clickedBubble.style.backgroundColor = "red"; // Change background color to red
      setTimeout(function() {
        clickedBubble.style.backgroundColor = ""; // Reset background color after 200 milliseconds
      }, 200);
    }
  }
});

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
  score++;
  document.querySelector("#scoreval").textContent = score;
}

function decreaseScore() {
  score--;
  document.querySelector("#scoreval").textContent = score;
}

function showScore() {
  var scoreDisplay = document.createElement('div');
  scoreDisplay.innerHTML = "<h2>Your Score: " + score + "</h2>"; // Removed unnecessary "</b>"
  document.querySelector("#pbtm").appendChild(scoreDisplay);
}

getNewHit();
makeBubble();
runTimer();
