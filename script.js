const audio = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

// tenta tocar automaticamente
window.addEventListener("load", () => {
  audio.play().catch(() => {
    playBtn.style.display = "block";
  });
});

// botão manual se autoplay for bloqueado
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.classList.add("active");
    playBtn.textContent = "❚❚";
  } else {
    audio.pause();
    playBtn.classList.remove("active");
    playBtn.textContent = "▶";
  }
});