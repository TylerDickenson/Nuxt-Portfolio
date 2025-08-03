<template>
  <div class="flex justify-center">
    <nav class="border-2 border-gray-200 rounded-full px-10 py-3 mt-4 bg-white shadow flex items-center">
      <ul class="flex gap-8 list-none m-0 p-0">
        <li v-for="item in navItems" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="px-3 py-2 rounded-full font-medium transition-colors duration-200 hover:bg-blue-50"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
]
</script>