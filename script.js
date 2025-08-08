document.addEventListener("DOMContentLoaded", () => {
  // Animación fade-in para secciones
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    setTimeout(() => {
      section.style.transition = "all 1s ease";
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, index * 400);
  });

  // Animación para imágenes en la galería
  const imgs = document.querySelectorAll(".gallery .image-grid img");
  imgs.forEach((img, index) => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.style.transition = "opacity 1s ease-in-out";
      img.style.opacity = 1;
    }, 1000 + index * 300);
  });
});
