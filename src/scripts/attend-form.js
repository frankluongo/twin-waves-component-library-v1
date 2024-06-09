export function AttendForm(form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
  });
}

export function AttendForms() {
  const cards = document.querySelectorAll('[data-id="attend-form"]');
  if (!cards) return;
  cards.forEach(AttendForm);
}
