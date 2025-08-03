<template>
  <div class="min-h-screen bg-white flex flex-col">
    <Navigation />
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>