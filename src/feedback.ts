
import { getRequired } from "./utils.js";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(message: string): void {
  alert(message);
}

const form = getRequired<HTMLFormElement>("#feedback-form");
const nameInput = getRequired<HTMLInputElement>("#name");
const emailInput = getRequired<HTMLInputElement>("#email");
const messageInput = getRequired<HTMLTextAreaElement>("#message");

form.addEventListener("submit", function (event: SubmitEvent): void {
  event.preventDefault();

  const name: string = nameInput.value.trim();
  const email: string = emailInput.value.trim();
  const message: string = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    showMessage("Please fill in all required fields.");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Please enter a valid email address.");
    return;
  }

  showMessage("Feedback submitted successfully!");
});
n