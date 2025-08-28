// heart counter
let heartCounter = parseInt(document.getElementById("heart-counter").innerText);

const heartClicks = document.getElementsByClassName("heart-icon");

for (const heartClick of heartClicks) {
  heartClick.addEventListener("click", function () {
    heartCounter++;
    document.getElementById("heart-counter").innerText = heartCounter;
  });
}

// copy counter
let copyCounter = parseInt(document.getElementById("copy-counter").innerText);

const copyBtns = document.getElementsByClassName("copy-btn");

for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    const emergencyCard = copyBtn.closest(".emergency-card");
    // console.log(copyBtn, emergencyCard);
    const number = emergencyCard.querySelector(".number").innerText;

    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert("ফোন নাম্বার কপি হয়েছে : " + number);
      })
      .catch((err) => {
        alert("ফোন নাম্বার কপি হয়নি !!!");
      });

    copyCounter++;
    document.getElementById("copy-counter").innerText = copyCounter;
  });
}

// calling features

const callBtns = document.getElementsByClassName("call-btn");

for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const emergencyCard = callBtn.closest(".emergency-card");
    const number = emergencyCard.querySelector(".number").innerText;
    const subName = emergencyCard.querySelector(".sub-name").innerText;

    alert("📞 Calling " + subName + " " + number + "...");
  });
}
