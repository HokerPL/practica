<script setup>
import { RouterView, RouterLink } from "vue-router";
import Header from "@/pages/Header.vue";
import Footer from "@/pages/Footer.vue";
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>

</style>

<style>
/* ── Global responsive base ── */
html, body {
  overflow-x: hidden;
  max-width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 1440px) {
  body {
    font-size: 15px;
  }
}
</style>
