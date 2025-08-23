<template>
  <div class="mb-8">
    <h3 class="font-centurion text-2xl font-bold text-center mb-4 text-gray-700">{{ title }}</h3>
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="'auto'"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverseDirection,
      }"
      :speed="speed"
      :loop-additional-slides="5"
      :class="`${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-swiper`"
    >
      <SwiperSlide 
        v-for="skill in [...skills, ...skills, ...skills]" 
        :key="`${title}-${skill.name}-${Math.random()}`"
        class="!w-auto"
      >
        <div class="skill-item bg-white rounded-xl p-6 border border-gray-300 hover:shadow-lg transition-all duration-300 text-center w-32 h-32 flex flex-col items-center justify-center">
          <Icon :name="skill.icon" :size="iconSize" class="mb-2" />
          <span class="text-sm font-medium text-gray-700">{{ skill.name }}</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

defineProps({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  },
  speed: {
    type: Number,
    default: 3000
  },
  reverseDirection: {
    type: Boolean,
    default: false
  },

  iconSize: {
    type: String,
    default: '2.5rem'
  }
})
</script>

<style scoped>
:deep(.swiper) {
  overflow: visible;
}

:deep(.swiper-wrapper) {
  transition-timing-function: linear;
}

:deep(.swiper-scrollbar) {
  display: none !important;
}
</style>
