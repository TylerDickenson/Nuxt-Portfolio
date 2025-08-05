<template>
  <section class="min-h-[50vh] py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">About Me</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="flex items-center justify-center">
          <div class="max-w-xs overflow-hidden border border-gray-200 shadow-lg">
            <img src="/images/tyler-profile.png" alt="Tyler Dickenson" class="w-full h-auto transform hover:scale-102 transition-all duration-300" />
          </div>
        </div>
        
        <!-- Right column for bio -->
        <div class="flex flex-col justify-center">
          <h3 class="text-2xl font-semibold text-gray-800 mb-3">Hi, I'm Tyler</h3>
          <p class="text-lg mb-4 text-gray-700">
            A recent graduate in computer science looking for opportunities in tech.
          </p>
          <p class="text-lg text-gray-700">
            With a strong foundation in software development and a particular interest in financial technology, I'm eager to contribute my skills to innovative projects.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>