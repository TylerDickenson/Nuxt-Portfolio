<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4"
       :class="{ 'translate-y-0': showNavbar, '-translate-y-full': !showNavbar }">
    <div class="border-2 border-gray-200 rounded-full px-6 sm:px-10 py-3 mt-4 bg-white shadow flex items-center justify-center w-fit">
      <ul class="flex gap-4 sm:gap-8 list-none m-0 p-0">
        <li v-for="item in navItems" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="px-2 sm:px-3 py-2 rounded-full font-medium transition-colors duration-200 hover:bg-blue-50 text-sm sm:text-base"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
]

const showNavbar = ref(false)
const scrollThreshold = 300

const handleScroll = () => {
  showNavbar.value = window.scrollY > scrollThreshold
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>