import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 500,
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          delay: 0
        });
      }
    };
    document.head.appendChild(script);
  });
});