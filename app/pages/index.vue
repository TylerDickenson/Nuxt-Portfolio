<template>
  <section class="flex flex-col items-center justify-center min-h-[60vh] text-center bg-cream dark:bg-gray-800 transition-colors duration-300">
    <Hero />
    <About />
    <Divider />
    <Skills />
    <Divider />
    <FeatuerdProjects />
    <Divider />
    <Journey />
    <Footer />
  </section>
</template>

<script setup>
useHead({
  title: 'Tyler Dickenson | Software Engineer',
  meta: [
    { 
      name: 'description', 
      content: "Portfolio of Tyler Dickenson, a Computer Science graduate specializing in full-stack development and innovative solutions in the fintech industry." 
    }
  ]
})
</script>