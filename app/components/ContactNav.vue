<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 pb-4"
       :class="{ 'translate-y-0': showContactNav, 'translate-y-full': !showContactNav }">
    <div class="border-2 border-gray-400 rounded-full px-4 bg-white dark:bg-gray-800 dark:border-gray-600 shadow w-fit transition-colors duration-300">
      <div class="flex h-10 items-center">
        <div class="flex gap-3 items-center">
          <!-- LinkedIn icon -->
          <a href="https://www.linkedin.com/in/tylerjdickenson/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center h-full text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
            <Icon name="simple-icons:linkedin" size="1.5rem" />
          </a>
          
          <!-- GitHub icon -->
          <a href="https://github.com/tylerdickenson" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center h-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            <Icon name="simple-icons:github" size="1.5rem" />
          </a>

          <div class="h-5 w-px bg-gray-300 dark:bg-gray-600"></div>
        

          <a
            href="/#footer"
            @click.prevent="scrollToSection('#footer')"
            class="font-centurion inline-block px-1 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-base text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
          >
            Contact
          </a>

        </div>
        

        
        <!-- Divider -->
        <div class="h-5 w-px bg-gray-300 dark:bg-gray-600 mx-3"></div>
        
        <!-- Dark mode toggle button -->
        <button @click="toggleDarkMode" class="flex items-center justify-center h-full text-gray-600 dark:text-gray-300 hover:text-gray-900   dark:hover:text-yellow-500 transition-colors duration-200" aria-label="Toggle dark mode">
          <ClientOnly fallback-tag="span">
            <Icon :name="colorMode.value === 'dark' ? 'heroicons:sun' : 'heroicons:moon'" size="1.5rem" />
            <template #fallback>
              <Icon name="heroicons:moon" size="1.5rem" />
            </template>
          </ClientOnly>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const colorMode = useColorMode()

const showContactNav = ref(false)
const scrollThreshold = 300

const scrollOffset = 60 // Adjust this value to change the offset for scrolling


onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  showContactNav.value = window.scrollY > scrollThreshold
}

function toggleDarkMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const scrollToSection = (hash) => {
  if (hash === '/' || hash === '#home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return
  }
  const id = hash.replace('#', '')
  const element = document.getElementById(id)
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - scrollOffset
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })
  }
}
</script>