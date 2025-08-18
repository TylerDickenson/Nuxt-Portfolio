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
      <h1 class="text-6xl md:text-8xl font-bold text-slate-100 drop-shadow-lg">
        Tyler Dickenson
      </h1>
      <h2 class="text-2xl md:text-3xl font-semibold text-slate-200 mt-4">
      Software Engineer | Fintech Enthusiast
    </h2>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <span class="text-slate-200 text-sm mb-2 animate-bounce">Scroll for more</span>
      <svg class="animate-bounce w-8 h-8 text-slate-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroVideo = ref(null)

onMounted(() => {
  if (heroVideo.value) {
    heroVideo.value.playbackRate = 0.85 
  }
})
</script>