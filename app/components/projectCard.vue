<template>
    <div class="bg-white rounded-3xl border border-gray-300 overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 h-full">
        <div class="relative overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-64 md:h-full object-cover"
          />
          <div class="absolute inset-0"></div>
        </div>
  
        <div class="border-t md:border-t-0 md:border-l border-gray-300">
          <div class="p-6 md:p-8 flex">
            <div class="my-auto w-full max-w-2xl mx-auto">
              <h3 class="font-centurion text-2xl font-bold text-slate-800 mb-3">
                {{ project.title }}
              </h3>
  
              <p class="text-gray-600 leading-relaxed mb-4">
                {{ project.description }}
              </p>
  
              <div class="mb-6 ">
                <h4 class="font-centurion text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                <div class="flex flex-wrap gap-2 justify-center">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
  
              <div class="flex gap-3 justify-center">
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  class="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
                >
                  <Icon name="mdi:github" size="20" />
                  <span class="text-sm font-medium">GitHub</span>
                </a>
  
                <a
                  v-if="project.liveDemo"
                  :href="project.liveDemo"
                  target="_blank"
                  class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors"
                >
                  <Icon name="ph:globe" size="20" />
                  <span class="text-sm font-medium">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    project: {
      type: Object,
      required: true,
      validator: (project) => {
        return project.title && project.description && project.image
      }
    }
  })
  </script>
  