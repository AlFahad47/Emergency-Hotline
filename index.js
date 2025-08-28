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

// history
historyData = [];

//star coin counter
let starCoin = parseInt(document.getElementById("star-coin").innerText);
const callBtns = document.getElementsByClassName("call-btn");
// console.log(starCoin);
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const emergencyCard = callBtn.closest(".emergency-card");
    const number = emergencyCard.querySelector(".number").innerText;
    const name = emergencyCard.querySelector(".name").innerText;
    const subName = emergencyCard.querySelector(".sub-name").innerText;
    const time = new Date().toLocaleTimeString();

    // console.log(name, number, time);
    if (starCoin >= 20) {
      starCoin = starCoin - 20;
      alert("📞 Calling " + subName + " " + number + "...");

      // star coin update
      document.getElementById("star-coin").innerText = starCoin;

      // history update
      const historyContainer = document.getElementById("history-container");
      historyContainer.innerText = "";

      const data = {
        name: name,
        number: number,
        time: time,
      };
      historyData.push(data);

      // console.log(historyData);

      for (const data of historyData) {
        const div = document.createElement("div");

        div.innerHTML = ` <div
            class="flex items-center justify-between mx-6 mb-2 p-4 bg-[#FAFAFA] rounded-lg"
          >
            <div>
              <h2 class="hind-madurai font-normal text-lg">
                ${data.name}
              </h2>
              <p class="hind-madurai font-normal text-lg">${data.number}</p>
            </div>
            <h2 class="hind-madurai font-normal text-lg">${data.time}</h2>
          </div>`;

        historyContainer.appendChild(div);
      }
    } else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }
  });
}

// clear histroy

document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";
    historyData = [];
  });
