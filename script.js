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
