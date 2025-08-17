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