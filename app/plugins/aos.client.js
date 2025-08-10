import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 500,  // Reduced from 800 to 500 for faster animations
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,     // Smaller offset for earlier animation triggering
        delay: 0        // No default delay
      });
    });
  }
});