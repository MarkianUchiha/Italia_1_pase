// src/scripts/galeria.ts

interface GalleryConfig {
	images: string[];
	slideGap: number;
	interval: number;
}

export default function runGallery(config: GalleryConfig) {
	const track = document.getElementById('gallery-track');
	if (!track) return;

	const slides = Array.from(track.children) as HTMLElement[];
	let currentIndex = 0;
	let startX = 0;
	let endX = 0;

	function calcMetrics() {
		const slideWidth = slides[0]?.offsetWidth || 0;
		return slideWidth + config.slideGap;
	}

	function showSlide(i: number) {
		const step = calcMetrics();
		track.style.transform = `translateX(-${i * step}px)`;
	}

	// Autoplay
	const autoplay = setInterval(() => {
		currentIndex = (currentIndex + 1) % slides.length;
		showSlide(currentIndex);
	}, config.interval);

	// Swipe handlers
	track.addEventListener('touchstart', e => {
		clearInterval(autoplay);
		startX = e.touches[0].clientX;
	});
	track.addEventListener('touchend', e => {
		endX = e.changedTouches[0].clientX;
		const diff = startX - endX;
		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				currentIndex = (currentIndex + 1) % slides.length;
			} else {
				currentIndex =
					(currentIndex - 1 + slides.length) % slides.length;
			}
			showSlide(currentIndex);
		}
		setTimeout(() => {
			runGallery(config); // Reinicia autoplay
		}, config.interval);
	});

	window.addEventListener('resize', () => showSlide(currentIndex));
	showSlide(currentIndex);
}
