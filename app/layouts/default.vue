<template>
  <div class="min-h-screen bg-cream dark:bg-gray-800 transition-colors duration-300 flex flex-col">
    <Navigation />
    <slot name="hero" />
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>
    <ContactNav />
  </div>
</template>