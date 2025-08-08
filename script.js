// Efecto de aparición con scroll
const secciones = document.querySelectorAll(".section-fade");

const mostrarSeccion = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(mostrarSeccion, {
  threshold: 0.1,
});

secciones.forEach(seccion => observer.observe(seccion));
