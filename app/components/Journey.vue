<template>
  <section id="journey" class="min-h-screen py-16 bg-cream">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-16 text-center text-slate-800">My Journey</h2>
      <div class="timeline-container w-full max-w-3xl mx-auto">
        <div class="timeline-line w-1 bg-slate-600 mx-auto relative" style="height: 70vh;">
          <div class="timeline-circle absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-500" style="top: 0%"></div>
          <div class="timeline-circle absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-500" style="top: 25%"></div>
          <div class="timeline-circle absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-500" style="top: 50%"></div>
          <div class="timeline-circle absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-500" style="top: 75%"></div>
          <div class="timeline-circle absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-500" style="top: 100%"></div>
          <div
            ref="firstBox"
            class="timeline-box absolute bg-white border-2 p-4"
            :style="{
              top: '0',
              left: '50%',
              marginLeft: boxInView ? '2px' : '200px',
              transform: 'translateY(12px)',
              transition: 'margin-left 0.7s cubic-bezier(0.4,0,0.2,1)'
            }"
          >
            <h3 class="text-xl font-bold">2025</h3>
            <h4 class="text-lg">Title Here</h4>
            <p>Description text goes here.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timelineHeight = ref('600px')
const boxInView = ref(false)
const firstBox = ref(null)

const updateTimelineHeight = () => {
  timelineHeight.value = `${window.innerHeight * 0.7}px`
}

let observer = null

const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    boxInView.value = true
    if (observer && firstBox.value) observer.unobserve(firstBox.value)
  }
}

onMounted(() => {
  updateTimelineHeight()
  window.addEventListener('resize', updateTimelineHeight)
  observer = new window.IntersectionObserver(handleIntersection, {
    threshold: 0.3,
  })
  if (firstBox.value) {
    observer.observe(firstBox.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateTimelineHeight)
  if (observer && firstBox.value) {
    observer.unobserve(firstBox.value)
  }
})
</script>

<style scoped>
@media (max-width: 768px) {
  .timeline-container {
    width: 90%;
  }
  .timeline-line {
    height: 80vh !important;
  }
}
@media (max-width: 480px) {
  .timeline-line {
    height: 70vh !important;
  }
}
.timeline-circle {
  z-index: 3; 
}
.timeline-box {
  width: 250px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  position: relative;
  background-color: white;
  z-index: 1;
}
.timeline-box::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  width: 12px;
  height: 13px;
  background-color: #FFFCF5;
  border-radius: 0 0 100% 0;
  border-right: 2px solid #e2e8f0;
  border-bottom: 2px solid #e2e8f0;
  z-index: 1;
}
</style>