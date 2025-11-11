const audio = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

// tenta tocar automaticamente
window.addEventListener("load", () => {
  // Defina aqui o ponto de início da música (em segundos)
  const startTime = 97; // Exemplo: 1 minuto e 23 segundos

  // quando o áudio estiver carregado, começa do ponto escolhido
  audio.addEventListener("loadedmetadata", () => {
    if (audio.duration > startTime) {
      audio.currentTime = startTime;
    }
  });

  // tenta tocar automaticamente
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