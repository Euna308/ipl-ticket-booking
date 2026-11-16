let toastTimer;

function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.cssText =
    "position:fixed; bottom:20px; right:20px; background:#173d2a; color:white; padding:12px 18px; border-radius:8px;";

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.remove(), 3000);
}

// Smoothly scroll from the match schedule to the booking form on index.html.
document.querySelectorAll('[data-book-button][href="#booking"]').forEach((button) => {
  button.addEventListener("click", (event) => {
    const bookingForm = document.getElementById("booking");
    if (!bookingForm) return;

    event.preventDefault();
    bookingForm.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Booking form is ready.");
  });
});

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Booking form submitted!");
  });
}

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

function updateBookingSummary() {
  const matchName =
    matchSelect.options[matchSelect.selectedIndex].text;
  const standName =
    standSelect.options[standSelect.selectedIndex].text;
  const quantity = Number(quantityInput.value) || 1;

  const standPrices = {
    general: 500,
    premium: 1200,
    vip: 2500
  };

  const pricePerTicket = standPrices[standSelect.value] || 0;

  document.getElementById("summary-match").textContent =
    matchSelect.value ? matchName : "Not selected";
  document.getElementById("summary-stand").textContent =
    standSelect.value ? standName : "Not selected";
  document.getElementById("summary-quantity").textContent = quantity;
  document.getElementById("summary-total").textContent =
    (pricePerTicket * quantity).toLocaleString("en-IN");

  showToast("Booking summary updated.");
}

matchSelect.addEventListener("change", updateBookingSummary);
standSelect.addEventListener("change", updateBookingSummary);
quantityInput.addEventListener("input", updateBookingSummary);