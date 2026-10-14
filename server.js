
document.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-day]");

  if (!button) {
    return;
  }

  const row = button.closest("tr");
  const day = button.dataset.day;

  row.classList.toggle("selected");

  const isSelected = row.classList.contains("selected");

  button.textContent = isSelected ? "Cancel" : "Book";

  const bookedRows = document.querySelectorAll(
    "#schedule tbody tr.selected"
  );

  const status = document.querySelector("#booking-status");

  status.textContent =
    `${day} ${isSelected ? "booked" : "unbooked"}. ` +
    `Total booked rows: ${bookedRows.length}.`;
});

// Task 10: Event loop demonstration
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise");
});

console.log("4. End");
