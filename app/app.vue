<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>



<!-- For smooth scrolling between components -->
<style>
html {
  scroll-behavior: smooth;
}
</style>