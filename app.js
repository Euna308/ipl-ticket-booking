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
