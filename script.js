const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const countDisplay = document.getElementById("count");
const errorMsg = document.getElementById("error");

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  errorMsg.classList.add("hidden");
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    errorMsg.classList.add("hidden");
  } else {
    errorMsg.textContent = "Error : Cannot go below 0";
    errorMsg.classList.remove("hidden");
  }
  updateDisplay();
});

clearBtn.addEventListener("click", () => {
  count = 0;
  errorMsg.classList.add("hidden");
  updateDisplay();
});

// Initialize
updateDisplay();
