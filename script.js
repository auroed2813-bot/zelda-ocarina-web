// Menú móvil toggle
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Modo oscuro toggle con persistencia
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

// Función para aplicar tema según estado
function applyTheme(dark) {
  if (dark) {
    body.classList.add('dark');
    toggleThemeBtn.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    toggleThemeBtn.textContent = '🌙';
  }
}

// Leer el tema guardado en localStorage (por defecto modo claro)
const savedTheme = localStorage.getItem('theme');
const darkModeOn = savedTheme === 'dark' ? true : false;
applyTheme(darkModeOn);

// Cambiar tema al hacer click y guardar en localStorage
toggleThemeBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Reproductor de música
const trackSelect = document.getElementById('track-select');
const playPauseBtn = document.getElementById('play-pause');
const stopBtn = document.getElementById('stop');

const audio = new Audio();
audio.src = trackSelect.value;

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    isPlaying = false;
    playPauseBtn.textContent = '▶️';
  }
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  isPlaying = false;
  playPauseBtn.textContent = '▶️';
});

trackSelect.addEventListener('change', () => {
  audio.src = trackSelect.value;
  if (isPlaying) {
    audio.play();
  }
});