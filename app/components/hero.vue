<template>
  <section class="relative w-screen h-screen flex items-center justify-center bg-cream overflow-hidden z-0 -mt-8">
    <video
      ref="heroVideo"
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/images/CanaryWharf.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <h1 class="font-centurion uppercase tracking-widest text-6xl md:text-8xl font-extrabold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
        Tyler Dickenson
      </h1>
      <h2 class="font-centurion uppercase tracking-wide text-5xl font-semibold text-white mt-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] min-h-[2.5rem]">
        <span>{{ typedText }}</span><span class="animate-pulse">|</span>
      </h2>
      <!-- transpatent bubbles -->
      <div class="mt-10 z-20 flex items-center justify-center gap-4">
        <div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-white text-sm font-medium">Available for Work</span>
        </div>
        <div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <Icon name="ph:navigation-arrow" class="text-white w-4 h-4 animate-pulse" />
          <span class="text-white text-sm">United Kingdom</span>
        </div>
      </div>
    </div>


    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <span class="text-white text-md mb-2  font-centurion">Scroll for more</span>
      <svg class="animate-bounce w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroVideo = ref(null)
const phrases = ['Software Engineer', 'Fintech Enthusiast', 'CompSci Graduate']
const typedText = ref('')
let phraseIndex = 0
let charIndex = 0
let isDeleting = false

function type() {
  const currentPhrase = phrases[phraseIndex]
  if (!isDeleting) {
    typedText.value = currentPhrase.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === currentPhrase.length) {
      setTimeout(() => {
        isDeleting = true
        type()
      }, 1500)
      return
    }
  } else {
    typedText.value = currentPhrase.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
    }
  }
  setTimeout(type, isDeleting ? 70  : 140)
}

onMounted(() => {
  if (heroVideo.value) {
    heroVideo.value.playbackRate = 1
  }
  type()
})
</script>