const numberHolder = document.querySelector(".number");
let number = +numberHolder.textContent;

const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");
const increaseBtn = document.querySelector("#increase-btn");

const contentEvent = new Event("contentchange");

numberHolder.addEventListener("contentchange", (e) => {
  if (number < 0) return (e.target.style.color = "red");
  if (number === 0) return (e.target.style.color = "black");
  e.target.style.color = "#008000";
});

decreaseBtn.addEventListener("click", () => {
  number -= 1;
  numberHolder.textContent = number;
  numberHolder.dispatchEvent(contentEvent);
});

resetBtn.addEventListener("click", () => {
  number = 0;
  numberHolder.textContent = number;
  numberHolder.dispatchEvent(contentEvent);
});

increaseBtn.addEventListener("click", () => {
  number += 1;
  numberHolder.textContent = number;
  numberHolder.dispatchEvent(contentEvent);
});
