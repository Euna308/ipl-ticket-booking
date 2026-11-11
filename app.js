function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.cssText =
    "position:fixed; bottom:20px; right:20px; background:#173d2a; color:white; padding:12px 18px; border-radius:8px;";

  setTimeout(() => toast.remove(), 3000);
}

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Booking form submitted!");
  });
}