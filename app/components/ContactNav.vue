<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 pb-4"
       :class="{ 'translate-y-0': showContactNav, 'translate-y-full': !showContactNav }">
    <div class="border-2 border-gray-200 rounded-full px-4 bg-white shadow w-fit transition-colors duration-300">
      <div class="flex h-10 items-center">
        <div class="flex gap-3 items-center">
          <!-- LinkedIn icon -->
          <a href="https://www.linkedin.com/in/tylerjdickenson/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center h-full text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <Icon name="simple-icons:linkedin" size="1.5rem" />
          </a>
          
          <!-- GitHub icon -->
          <a href="https://github.com/tylerdickenson" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center h-full text-gray-600 hover:text-gray-900 transition-colors duration-200">
            <Icon name="simple-icons:github" size="1.5rem" />
          </a>
        </div>
        
        <!-- Divider -->
        <div class="h-5 w-px bg-gray-300 mx-3"></div>
        
        <!-- Dark mode toggle button yet to implement!!! -->
        <button @click="toggleDarkMode" class="flex items-center justify-center h-full text-gray-600 hover:text-yellow-500 transition-colors duration-200" aria-label="Toggle dark mode">
          <Icon :name="isDarkMode ? 'ph:moon-fill' : 'ph:sun-fill'" size="1.5rem" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showContactNav = ref(false)
const scrollThreshold = 300
const isDarkMode = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  showContactNav.value = window.scrollY > scrollThreshold
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  console.log('Dark mode toggled:', isDarkMode.value)
}
</script>