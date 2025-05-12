// src/components/galeria.ts

interface GalleryConfig {
  images: string[];
  slideGap: number;
  interval: number;
}

document.addEventListener("DOMContentLoaded", () => {
  // Obtener la configuración pasada desde el componente Astro
  const scriptElement = document.querySelector<HTMLScriptElement>('script[src*="galeria.ts"]');
  let config: GalleryConfig | null = null;

  if (scriptElement && scriptElement.dataset.config) {
    try {
      config = JSON.parse(scriptElement.dataset.config) as GalleryConfig;
    } catch (e) {
      console.error("Failed to parse gallery config:", e);
    }
  }

  if (!config) {
    console.error("Gallery configuration not found or invalid.");
    return;
  }

  const track = document.getElementById("gallery-track");

  // Verificar que 'track' es un HTMLElement y existe
  if (!(track instanceof HTMLElement)) {
    console.error("Element with ID 'gallery-track' not found or is not an HTML element.");
    return; // Salir si no se encuentra el elemento
  }

  const slides: HTMLElement[] = Array.from(track.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement
  );

  if (slides.length === 0) {
    console.warn("No slides found in the track.");
    return;
  }

  let currentIndex: number = 0;

  // Calcula el ancho de cada slide
  let slideWidth: number = (slides[0]?.offsetWidth || 0) + config.slideGap; // Usar el valor del config

  /**
   * Mueve la pista de la galería a la posición de la slide indicada.
   * @param {number} i El índice de la slide a mostrar.
   */
  function showSlide(i: number): void {
    track.style.transform = `translateX(-${i * slideWidth}px)`;
  }

  // Autoplay
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, config.interval);

  // Recalcula al redimensionar ventana
  window.addEventListener("resize", () => {
    slideWidth = (slides[0]?.offsetWidth || 0) + config.slideGap;
    showSlide(currentIndex); // Mostrar la slide actual con el nuevo ancho
  });

  // Inicializar la posición de la galería al cargar
  showSlide(currentIndex);
});