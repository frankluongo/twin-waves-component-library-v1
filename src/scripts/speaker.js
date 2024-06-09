function SpeakerCard(card) {
  const footer = card.querySelector("footer");
  const height = footer.getBoundingClientRect().height;
  card.style.setProperty("--footer-height", `${height}px`);
}

export function SpeakerCards() {
  const cards = document.querySelectorAll('[data-id="speaker-card"]');
  if (!cards) return;
  cards.forEach(SpeakerCard);
}
