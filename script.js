document.addEventListener("DOMContentLoaded", () => {
  // Animar las secciones al hacer scroll
  const sections = document.querySelectorAll(".section-fade");

  function checkSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  }

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
    document.getElementById("mensaje").textContent = mensaje;
}


  checkSections();
  window.addEventListener("scroll", checkSections);

  // Añadir efecto hover para imágenes (opcional, ejemplo simple)
  const galleryImages = document.querySelectorAll(".gallery .image-grid img");
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      alert(`¡Has seleccionado la imagen: "${img.alt}"!`);
    });
  });
});
