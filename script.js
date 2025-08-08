function mostrarMensaje() {
  const frases = [
    "¡Hyaaa!",
    "¡Vamos a salvar Hyrule!",
    "Escucha el llamado de la ocarina...",
    "¡Navi dice: Hey! Listen!",
    "Has desbloqueado una melodía secreta.",
    "¡Tú eres el héroe del tiempo!"
  ];

  const mensaje = frases[Math.floor(Math.random() * frases.length)];
  const mensajeElemento = document.getElementById("mensaje");
  mensajeElemento.textContent = mensaje;

  mensajeElemento.classList.remove("visible");
  void mensajeElemento.offsetWidth;
  mensajeElemento.classList.add("visible");
}

document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.3 });

  elementosAnimados.forEach(elemento => {
    observer.observe(elemento);
  });
});