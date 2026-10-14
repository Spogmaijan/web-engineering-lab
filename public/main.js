import { delay, makeCounter } from "./utils.js";

const counter = makeCounter();

document.addEventListener("click", async function (event) {
  const button = event.target.closest("button[data-day]");

  if (!button) return;
  if (button.disabled) return;

  button.disabled = true;
  button.textContent = "Please wait...";

  await delay(1000);

  const day = button.dataset.day;
  const row = button.closest("tr");

  row.classList.toggle("selected");

  const isSelected = row.classList.contains("selected");

  button.textContent = isSelected ? "Cancel" : "Book";
  button.disabled = false;

  const number = counter();
  const status = document.querySelector("#booking-status");

  status.textContent =
    number + ". " + day + (isSelected ? " booked." : " unbooked.");
});