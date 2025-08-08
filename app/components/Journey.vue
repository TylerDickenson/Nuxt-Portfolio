<template>
  <section id="journey" class="min-h-[100vh] py-10 bg-cream">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-slate-800">My Journey</h2>
      
      <div class="relative flex justify-center">
        <!-- Timeline vert bar -->
        <div class="absolute h-full w-2 bg-slate-800 rounded-full"></div>
        
        <div class="min-h-[60vh] w-full relative">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div class="w-4 h-4 bg-slate-800 rotate-45"></div>
          </div>
          <!-- First item card made to be made into some sort of component probs -->
          <div class="absolute top-[-2px] left-[calc(50%+4px)] w-[calc(50vw-3rem)] md:w-80 bg-white shadow-md rounded-tr-md rounded-br-md p-6 border-r-4 border-b-4 border-t-4 border-slate-400">
            <div class="h-24"></div>
          </div>
          
          <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div class="w-4 h-4 bg-slate-800 rotate-45"></div>
          </div>
          
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div class="w-4 h-4 bg-slate-800 rotate-45"></div>
          </div>
          
          <div class="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div class="w-4 h-4 bg-slate-800 rotate-45"></div>
          </div>
          
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
            <div class="w-4 h-4 bg-slate-800 rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>