const cards = document.querySelectorAll('.card');

function reveal() {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < trigger) card.classList.add('active');
  });
}

window.addEventListener('scroll', reveal);
reveal();

// subtle parallax effect
window.addEventListener('mousemove', e => {
  document.querySelectorAll('.blob').forEach((blob, i) => {
    const speed = (i+1) * 10;
    blob.style.transform = `translate(${e.clientX/speed}px, ${e.clientY/speed}px)`;
  });
});


document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', (e) => {
    tag.style.transform = "scale(0.9)";
    setTimeout(() => {
      tag.style.transform = "";
    }, 150);
  });
});