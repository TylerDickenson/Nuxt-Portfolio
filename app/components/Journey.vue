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
            class="timeline-box-right absolute bg-white border-2 p-4"
            :style="{
              top: '0',
              left: '50%',
              marginLeft: boxInView ? '2px' : '550px',
              transform: 'translateY(12px)',
              transition: 'margin-left 0.7s cubic-bezier(0.4,0,0.2,1)'
            }"
          >
            <h3 class="text-xl font-bold">2025</h3>
            <h4 class="text-lg">Title Here</h4>
            <p>Description text goes here.</p>
          </div>
          <div
            ref="secondBox"
            class="timeline-box-left absolute bg-white border-2 p-4"
            :style="{
              top: 'calc(25% - 91px)',
              left: '50%',
              marginLeft: secondBoxInView ? '-352px' : '-550px',
              transform: 'translateY(-12px)',
              transition: 'margin-left 0.7s cubic-bezier(0.4,0,0.2,1)'
            }"
          >
            <h3 class="text-xl font-bold">2026</h3>
            <h4 class="text-lg">title 2 </h4>
            <p>test descrip</p>
          </div>

          <div
            ref="thirdBox"
            class="timeline-box-right absolute bg-white border-2 p-4"
            :style="{
              top: 'calc(50% - 231px)',
              left: '50%',
              marginLeft: thirdBoxInView ? '2px' : '550px',
              transform: 'translateY(12px)',
              transition: 'margin-left 0.7s cubic-bezier(0.4,0,0.2,1)'
            }"
          >
            <h3 class="text-xl font-bold">2027</h3>
            <h4 class="text-lg">Title 3</h4>
            <p>Description for 2027.</p>
          </div>
          <div
            ref="fourthBox"
            class="timeline-box-left absolute bg-white border-2 p-4"
            :style="{
              top: 'calc(75% - 322px)',
              left: '50%',
              marginLeft: fourthBoxInView ? '-352px' : '-550px',
              transform: 'translateY(-12px)',
              transition: 'margin-left 0.7s cubic-bezier(0.4,0,0.2,1)'
            }"
          >
            <h3 class="text-xl font-bold">2028</h3>
            <h4 class="text-lg">Title 4</h4>
            <p>Description for 2028.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const boxInView = ref(false)
const firstBox = ref(null)

const secondBoxInView = ref(false)
const secondBox = ref(null)

const thirdBoxInView = ref(false)
const thirdBox = ref(null)

const fourthBoxInView = ref(false)
const fourthBox = ref(null)

let observer = null
let observer2 = null
let observer3 = null
let observer4 = null

const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    boxInView.value = true
    if (observer && firstBox.value) observer.unobserve(firstBox.value)
  }
}

const handleIntersection2 = (entries) => {
  if (entries[0].isIntersecting) {
    secondBoxInView.value = true
    if (observer2 && secondBox.value) observer2.unobserve(secondBox.value)
  }
}

const handleIntersection3 = (entries) => {
  if (entries[0].isIntersecting) {
    thirdBoxInView.value = true
    if (observer3 && thirdBox.value) observer3.unobserve(thirdBox.value)
  }
}
const handleIntersection4 = (entries) => {
  if (entries[0].isIntersecting) {
    fourthBoxInView.value = true
    if (observer4 && fourthBox.value) observer4.unobserve(fourthBox.value)
  }
}

onMounted(() => {
  observer = new window.IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  })
  if (firstBox.value) {
    observer.observe(firstBox.value)
  }

  observer2 = new window.IntersectionObserver(handleIntersection2, {
    threshold: 0.5,
  })
  if (secondBox.value) {
    observer2.observe(secondBox.value)
  }
  observer3 = new window.IntersectionObserver(handleIntersection3, {
    threshold: 0.5,
  })
  if (thirdBox.value) {
    observer3.observe(thirdBox.value)
  }
  observer4 = new window.IntersectionObserver(handleIntersection4, {
    threshold: 0.5,
  })
  if (fourthBox.value) {
    observer4.observe(fourthBox.value)
  }
})

onUnmounted(() => {
  if (observer && firstBox.value) {
    observer.unobserve(firstBox.value)
  }
  if (observer2 && secondBox.value) {
    observer2.unobserve(secondBox.value)
  }
  if (observer3 && thirdBox.value) {
    observer3.unobserve(thirdBox.value)
  }
  if (observer4 && fourthBox.value) {
    observer4.unobserve(fourthBox.value)
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
.timeline-box-right {
  width: 350px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  background-color: white;
  z-index: 1;
}
.timeline-box-right::before {
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
.timeline-box-left {
  width: 350px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
  background-color: white;
  z-index: 1;
}
.timeline-box-left::before {
  content: "";
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 13px;
  background-color: #FFFCF5;
  border-radius: 0 0 0 100%;
  border-left: 2px solid #e2e8f0;
  border-bottom: 2px solid #e2e8f0;
  z-index: 1;
}
</style>