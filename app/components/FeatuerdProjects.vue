<template>
  <section id="featured-projects" class="min-h-[50vh] py-20 bg-cream">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="font-centurion text-4xl font-bold mb-4 text-slate-800">Featured Projects</h2>
        <p class="text-lg text-gray-600">A showcase of my academic work and personal projects</p>
      </div>
      
      <div class="space-y-8 max-w-6xl mx-auto">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "Finance Social Media App",
    image: "/images/fin-social-card.png",
    description: "A full-stack social finance web app featuring user authentication, database management, real-time financial data integration, and a modern responsive UI. Built for my Dissertation Project to break the stigma surrounding Financial Discussions.",
    technologies: ["React", "Laravel", "PHP", "Tailwind CSS"],
    githubUrl: "https://github.com/tylerdickenson/social-finance-app",
    liveDemo: "https://fin-social.com"
  },
]
</script>
