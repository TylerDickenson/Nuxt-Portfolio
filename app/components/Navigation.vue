<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4"
       :class="{ 'translate-y-0': showNavbar, '-translate-y-full': !showNavbar }">
    <div class="border-2 border-gray-400 rounded-full px-4 py-0 mt-4 bg-white shadow flex items-center justify-center w-fit">
      <ul class="flex gap-4 list-none m-0 p-0">
        <template v-for="(item, idx) in navItems" :key="item.to">
          <li>
            <a
              :href="item.to"
              @click.prevent="scrollToSection(item.to)"
              class="font-centurion text-lg inline-block px-1 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-gray-800 hover:text-black"
            >
              {{ item.label }}
            </a>
          </li>
          <div
            v-if="idx < navItems.length - 1"
            class="h-5 w-px bg-gray-300 self-center"
          ></div>
        </template>
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
const scrollOffset = 54 //

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