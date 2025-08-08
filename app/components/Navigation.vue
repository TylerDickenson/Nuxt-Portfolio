<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4"
       :class="{ 'translate-y-0': showNavbar, '-translate-y-full': !showNavbar }">
    <div class="border-2 border-gray-200 rounded-full px-8 py-0 mt-4 bg-white shadow flex items-center justify-center w-fit">
      <ul class="flex gap-4 list-none m-0 p-0">
        <li v-for="item in navItems" :key="item.to">
          <a
            :href="item.to"
            @click.prevent="scrollToSection(item.to)"
            class="inline-block px-3 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-base text-gray-800 hover:text-blue-600"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#featured-projects', label: 'Projects' },
  { to: '/#journey', label: 'Journey' }
]

const showNavbar = ref(false)
const scrollThreshold = 300
const scrollOffset = 60 //

const scrollToSection = (hash) => {
  if (hash === '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return
  }
  
  const id = hash.split('#')[1]
  const element = document.getElementById(id)
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - scrollOffset
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })
  }
}

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