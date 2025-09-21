<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
useHead({
  link: [
    {
      rel: 'icon',
      href: '/images/tyler-profile.png'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap'
    }
  ],
  title: "About Me | Tyler Dickenson",
  meta: [
    {
      name: "description",
      content: "Learn more about Tyler Dickenson, a Computer Science graduate specializing in full-stack fintech development and innovative solutions."
    },
    {
      name: "keywords",
      content: "Tyler Dickenson, fintech, full-stack developer, computer science, Swansea University, portfolio"
    },
    {
      property: "og:title",
      content: "About Me | Tyler Dickenson"
    },
    {
      property: "og:description",
      content: "Discover Tyler Dickenson's background, skills, and passion for fintech and full-stack development."
    }
  ]
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>