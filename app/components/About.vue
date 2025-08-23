<template>
  <section id="about" class="min-h-[60vh] py-20 bg-cream">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="font-centurion text-4xl font-bold mb-4 text-slate-800">About Me</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        
        <div class="flex justify-center">
          <div class="text-center">
            <div class="w-64 h-96 mx-auto overflow-hidden rounded-2xl border border-gray-300 mb-6">
              <img src="/images/tyler-profile.png" alt="Tyler Dickenson" 
                class="w-full h-full object-cover object-center scale-125" />
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <h4 class="font-centurion text-2xl font-semibold text-gray-800 mb-6">Hi, I'm Tyler</h4>
          
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            A recent Computer Science graduate from Swansea University with a passion for building innovative solutions. 
            I specialize in full-stack development with a particular interest in fintech applications.
          </p>

          <p class="text-lg text-gray-600 leading-relaxed mb-8">
            I'm eager to contribute my skills to impactful projects and get involved in the fintech industry.
          </p>
          <div>
            <a href="/Tyler_Dickenson_CV.pdf" target="_blank"
               class="inline-block px-6 py-3 bg-slate-600 text-white rounded-full hover:bg-slate-700 transition-colors font-medium">
              View my CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>