let heartCounter = parseInt(document.getElementById("heart-counter").innerText);

const heartClicks = document.getElementsByClassName("heart-icon");

for (const heartClick of heartClicks) {
  heartClick.addEventListener("click", function () {
    heartCounter++;
    document.getElementById("heart-counter").innerText = heartCounter;
  });
}
