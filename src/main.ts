
import { getRequired } from "./utils.js";

const schedule = getRequired<HTMLElement>("#schedule");
const statusElement = getRequired<HTMLElement>("#status");

schedule.addEventListener("click", function (event: MouseEvent) {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  const button = target.closest<HTMLButtonElement>("button[data-day]");

  if (!button) {
    return;
  }

  const day = button.dataset.day;

  if (!day) {
    return;
  }

  const selectedButton = Array.from(
    schedule.querySelectorAll<HTMLButtonElement>("button[data-day]")
  ).find(function (item) {
    return item.dataset.day === day;
  });

  if (!selectedButton) {
    return;
  }

  statusElement.textContent = `You selected ${day}.`;
});
