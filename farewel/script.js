const messages = document.querySelectorAll('.message');
let currentIndex = 0;
const overlay = document.getElementById('overlay');
const btn = document.getElementById('surpriseBtn');
const music = document.getElementById('music');

const confCanvas = document.getElementById('confetti');
const confettiGen = confetti.create(confCanvas, { resize: true, useWorker: true });

function launchConfetti() {
  confettiGen({ particleCount: 150, spread: 200, origin: { y: 0.6 } });
}

function showNextMessage() {
  if (currentIndex > 0) messages[currentIndex - 1].style.opacity = 0;
  if (currentIndex < messages.length) {
    messages[currentIndex].style.opacity = 1;
    messages[currentIndex].style.top = 50 + currentIndex * 45 + 'px';
    launchConfetti();
    currentIndex++;
    setTimeout(showNextMessage, 2600);
  } else {
    btn.style.display = 'block';
    btn.style.opacity = 1;
    currentIndex = 0;
  }
}

btn.addEventListener('click', () => {
  btn.style.opacity = 0;
  setTimeout(() => { btn.style.display = 'none'; }, 600);

  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.style.display = 'none';
    music.play();
    showNextMessage();
  }, 1500);
});