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




















// Frases românticas
const frases = [
  "Você é o meu lugar preferido no mundo inteiro.",
  "Desde que te conheci, tudo ficou mais bonito.",
  "Nada é mais doce do que te ter por perto.",
  "Você é a paz que o meu coração sempre procurou.",
  "Com você, o amor virou o meu destino. 💖"
];

let index = 0;
const textBox = document.getElementById("loveText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function trocarTexto(novoIndex) {
  textBox.classList.add("fade-out");
  setTimeout(() => {
    textBox.textContent = frases[novoIndex];
    textBox.classList.remove("fade-out");
  }, 400);
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + frases.length) % frases.length;
  trocarTexto(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % frases.length;
  trocarTexto(index);
});